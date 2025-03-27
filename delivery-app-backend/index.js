const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const registrationRoutes = require('./routes/registration');
const db = require('./db/connection');
const mysql = require('mysql2/promise');
const uploadFoodImageRouter = require('./routes/uploadFoodImage');
const uploadFoodImageRouters = require('./routes/uploadimgtoclint');
const multer = require("multer");
const fs = require("fs");


const moment = require('moment');
const { exec } = require('child_process');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();


const app = express();
const PORT = 6000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (profile pictures)
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api', registrationRoutes);
app.use('/api', uploadFoodImageRouter);
app.use('/api', uploadFoodImageRouters);



const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'ALOK',
  database: 'test_food_app',
};


// **1. Connect to MySQL Database**

const dbs = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "ALOK",
  database: "MCQB",
});

 
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only PDF, DOCX, and images are allowed."));
  }
};


const storage = multer.diskStorage({
  destination: "uploads1/",
  filename: (req, file, cb) => {
    const fileExtension = path.extname(file.originalname);
    cb(null, Date.now() + fileExtension);
  },
});

const upload = multer({ storage, fileFilter });



app.post("/upload-file", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const filePath = path.resolve(__dirname, "uploads1", req.file.filename);
  const pythonScriptPath = path.resolve(
    "C:/Users/Alok Pandey/Downloads/McQB Generater/ai_model/env/mcq_pdfdocx.py"
  );

  console.log(`Processing File: ${filePath}`);

  exec(`python "${pythonScriptPath}" "${filePath}"`, async (error, stdout, stderr) => {
    if (error) {
      console.error("AI Model Execution Error:", stderr || error.message);
      return res.status(500).json({ error: "Failed to generate MCQs", details: stderr || error.message });
    }

    try {
      // Extract JSON from response
      let jsonStartIndex = stdout.indexOf("[");
      let jsonEndIndex = stdout.lastIndexOf("]") + 1;

      if (jsonStartIndex === -1 || jsonEndIndex === 0) {
        throw new Error("No valid JSON found in response");
      }

      const cleanedJson = stdout.substring(jsonStartIndex, jsonEndIndex);
      const mcqData = JSON.parse(cleanedJson);

      console.log("Generated MCQs:", mcqData);

      // Insert MCQs into MySQL
      const insertPromises = mcqData.map((mcq) => {
        return new Promise((resolve, reject) => {
          const sql = `
            INSERT INTO Generated_to_scanMCQB (question, option1, option2, option3, option4, answer, explanation) 
            VALUES (?, ?, ?, ?, ?, ?, ?)
          `;
          const values = [
            mcq.question,
            mcq.options[0],
            mcq.options[1],
            mcq.options[2],
            mcq.options[3],
            mcq.answer,
            mcq.explanation,
          ];

          dbs.query(sql, values, (err, result) => {
            if (err) {
              console.error("Database Insert Error:", err);
              reject(err);
            } else {
              console.log(`MCQ Inserted with ID: ${result.insertId}`);
              resolve(result.insertId);
            }
          });
        });
      });

      // Wait for all inserts to complete
      try {
        await Promise.all(insertPromises);
        res.json({ message: "MCQs inserted successfully", mcqs: mcqData });
      } catch (dbError) {
        res.status(500).json({ error: "Database insert failed", details: dbError.message });
      }

    } catch (parseError) {
      console.error("JSON Parse Error:", stdout);
      res.status(500).json({ error: "Invalid response from AI model", details: stdout });
    }
  });
});

// API route to fetch MCQs
// app.get("/fetchmcqs", (req, res) => {
//   const sql = "SELECT question, option1, option2, option3, option4, answer FROM Generated_to_scanMCQB";
//   dbs.query(sql, (err, results) => {
//     if (err) {
//       res.status(500).json({ error: "Failed to fetch data" });
//     } else {
//       res.json(results);
//     }
//   });
// });



// Fetch Quiz History
app.get('/fetchmcqs', async (req, res) => {

  try {
    // Use await and pass userId inside an array
    const [rows] = await dbs.query(
      `SELECT question, option1, option2, option3, option4, answer FROM Generated_to_scanMCQB;`,
      
    );

    res.json(rows); // Send questions to the frontend
  } catch (error) {
    console.error("Database Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});





















































// **2. Fetch Available Topics**
app.get("/topics", async (req, res) => {
  const query = "SELECT DISTINCT topic FROM mcqs";

  try {
      const [results] = await dbs.query(query);  // ✅ Use async/await
      res.json(results.map(row => row.topic));
  } catch (err) {
      console.error("❌ Error fetching topics:", err.message);
      res.status(500).json({ error: err.message });
  }
});


// **3. Fetch MCQs by Topic & Difficulty**
// **2. Fetch MCQs by Topic & Difficulty (5 Random Questions)**
app.get("/mcqs/:topic/:difficulty", (req, res) => {
  const { topic, difficulty } = req.params;
  const query = `SELECT * FROM mcqs WHERE topic = ? AND difficulty = ? ORDER BY RAND() LIMIT 5`;

  dbs.query(query, [topic, difficulty], (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
  });
});



// app.get('/getMCQs', async (req, res) => {
//   const { topic, difficulty } = req.query;
//   const sql = "SELECT * FROM mcq_questions WHERE topic = ? AND difficulty = ? ORDER BY RAND() LIMIT 5";

//   try {
//       const [results] = await dbs.query(sql, [topic, difficulty]);  // ✅ Use async/await
//       res.json(results.length > 0 ? results : { message: "No MCQs found for the given topic and difficulty" });
//   } catch (err) {
//       console.error("❌ Database error:", err.message);
//       res.status(500).json({ error: "Database error" });
//   }
// });

app.get('/getMCQs', async (req, res) => {
  const { topic, difficulty } = req.query;
  const sql = "SELECT * FROM mcq_questions WHERE topic = ? AND difficulty = ? ORDER BY RAND() LIMIT 5";

  try {
    const results = await dbs.query(sql, [topic, difficulty]); // Remove destructuring

    if (!Array.isArray(results[0])) { 
      // console.error("❌ Database returned unexpected format:", results);
      return res.status(500).json({ error: "Invalid database response" });
    }

    res.json(results[0]);  // Send the first element if needed
  } catch (err) {
    console.error("❌ Database error:", err.message);
    res.status(500).json({ error: "Database error" });
  }
});


// app.post('/saveTestResult', async (req, res) => {
//   const { answers, score } = req.body;
  
//   try {
//     for (let questionId in answers) {
//       const userAnswer = answers[questionId];
//       const sql = "INSERT INTO test_results (question_id, user_answer, score) VALUES (?, ?, ?)";
//       await dbs.query(sql, [questionId, userAnswer, score]);
//     }
//     res.json({ message: "Test results saved!" });
//   } catch (error) {
//     console.error("Error saving results:", error);
//     res.status(500).json({ error: "Database error" });
//   }
// });




// **5. AI-Powered MCQ Generation**
app.get("/generate-mcq/:topic/:difficulty", (req, res) => {
  const { topic, difficulty } = req.params;
  console.log(`✅ Received from frontend: Topic - ${topic}, Difficulty - ${difficulty}`);
  const pythonScriptPath = "C:/Users/Alok Pandey/Downloads/Problem 7/ai_model/env/mcq_generator.py";

  console.log(`🚀 Running AI Script: ${pythonScriptPath} [${topic}, ${difficulty}]`);

  exec(`python "${pythonScriptPath}" "${topic}" "${difficulty}"`, (error, stdout, stderr) => {
      if (error) {
          console.error("❌ AI Model Execution Error:", stderr);
          return res.status(500).json({ error: "Failed to generate MCQs", details: stderr });
      }

      try {
          const jsonMatch = stdout.match(/\[.*\]/s);
          if (!jsonMatch) throw new Error("Invalid JSON format");

          const mcqData = JSON.parse(jsonMatch[0]);
          console.log("✅ Generated MCQs:", mcqData);

          // Insert generated MCQs into the database
          const insertQuery = `
              INSERT INTO mcq_questions (question, option1, option2, option3, option4, correct_answer, explanation, topic, difficulty)
              VALUES ?
          `;

          const values = mcqData.map(mcq => [
             
              mcq.question,
              mcq.options[0],
              mcq.options[1],
              mcq.options[2],
              mcq.options[3],
              mcq.answer,
              mcq.explanation,
               topic,
              difficulty
          ]);

          dbs.query(insertQuery, [values], (insertErr) => {
              if (insertErr) {
                  console.error("❌ Error inserting AI-generated MCQs:", insertErr.message);
              }
          });

          res.json(mcqData);
      } catch (parseError) {
          console.error("❌ JSON Parse Error:", stdout);
          res.status(500).json({ error: "Invalid response from AI model", details: stdout });
      }
  });
});



// for aptitude........................................................................

// **5. AI-Powered MCQ Generation**
// **AI-Powered MCQ Generation API**

// app.get("/generate-mcq-for-aptitude/:noq/:aptitudeType", (req, res) => {
//   const { noq, aptitudeType } = req.params;
//   console.log(`✅ Received from frontend: noq - ${noq}, aptitudeType - ${aptitudeType}`);

//   const pythonScriptPath = "C:/Users/Alok Pandey/Downloads/Problem 7/ai_model/env/mcq_aptitude.py";

//   console.log(`🚀 Running AI Script: ${pythonScriptPath} [${noq}, ${aptitudeType}]`);

//   exec(`python "${pythonScriptPath}" "${noq}" "${aptitudeType}"`, (error, stdout, stderr) => {
//     if (error) {
//       console.error("❌ AI Model Execution Error:", stderr);
//       return res.status(500).json({ error: "Failed to generate MCQs", details: stderr });
//     }

//     try {
//       const jsonMatch = stdout.match(/\[.*\]/s);
//       if (!jsonMatch) throw new Error("Invalid JSON format");

//       const mcqData = JSON.parse(jsonMatch[0]);
//       console.log("✅ Generated MCQs:", mcqData);

//       // Insert generated MCQs into the database
//       const insertQuery = `
//         INSERT INTO mcq_questions (question, option1, option2, option3, option4, correct_answer, explanation, topic, difficulty)
//         VALUES ?
//       `;

//       const values = mcqData.map(mcq => [
//         mcq.question,
//         mcq.options[0],
//         mcq.options[1],
//         mcq.options[2],
//         mcq.options[3],
//         mcq.answer,
//         mcq.explanation,
//         aptitudeType,
//         "Hard" // Default difficulty
//       ]);

//       dbs.query(insertQuery, [values], (insertErr) => {
//         if (insertErr) {
//           console.error("❌ Error inserting AI-generated MCQs:", insertErr.message);
//         }
//       });

//       res.json(mcqData);
//     } catch (parseError) {
//       console.error("❌ JSON Parse Error:", stdout);
//       res.status(500).json({ error: "Invalid response from AI model", details: stdout });
//     }
//   });
// });




// app.get("/generate-mcq-for-aptitude/:noq", async (req, res) => {
//   const { noq } = req.params;
//   const aptitudeTypes = ["Maths", "Reasoning", "English", "Logical"]; // Default list

//   console.log(` Received from frontend: noq - ${noq}, aptitudeTypes - ${aptitudeTypes}`);

//   const pythonScriptPath = "C:/Users/Alok Pandey/Downloads/McQB Generater/ai_model/env/mcq_aptitude.py";
//   console.log(`Running AI Script: ${pythonScriptPath} [${noq}, ${aptitudeTypes.join(", ")}]`);

//   try {
//     // Execute Python script with all aptitude types
//     const { exec } = require("child_process");
//     exec(`python "${pythonScriptPath}" "${noq}" "${aptitudeTypes.join(",")}"`, (error, stdout, stderr) => {
//       if (error) {
//         console.error(" AI Model Execution Error:", stderr);
//         return res.status(500).json({ error: "Failed to generate MCQs", details: stderr });
//       }

//       try {
//         const jsonMatch = stdout.match(/\[.*\]/s);
//         if (!jsonMatch) throw new Error("Invalid JSON format");

//         const mcqData = JSON.parse(jsonMatch[0]);
//         console.log(" Generated MCQs:", mcqData);

//         // Store MCQs in database
//         const insertQuery = `
//           INSERT INTO mcq_aptitude (question, option1, option2, option3, option4, correct_answer, explanation, topic, difficulty)
//           VALUES ?
//         `;

//         const values = mcqData.map(mcq => [
//           mcq.question,
//           mcq.options[0],
//           mcq.options[1],
//           mcq.options[2],
//           mcq.options[3],
//           mcq.answer,
//           mcq.explanation,
//           mcq.topic, // AI script must return `topic` for each question
//           "Hard" // Default difficulty
//         ]);

//         dbs.query(insertQuery, [values], (insertErr) => {
//           if (insertErr) {
//             console.error(" Error inserting AI-generated MCQs:", insertErr.message);
//           }
//         });

//         res.json(mcqData);
//       } catch (parseError) {
//         console.error(" JSON Parse Error:", stdout);
//         res.status(500).json({ error: "Invalid response from AI model", details: stdout });
//       }
//     });
//   } catch (error) {
//     console.error(" Unexpected Server Error:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });



app.get("/generate-mcq-for-aptitude/:noq", async (req, res) => {
  const { noq } = req.params;
  const aptitudeTypes = ["Maths", "Reasoning", "English", "Logical"];

  console.log(`Received: noq=${noq}, types=${aptitudeTypes.join(", ")}`);

  const pythonScriptPath = "C:/Users/Alok Pandey/Downloads/McQB Generater/ai_model/env/mcq_aptitude.py";
  console.log(`Running AI Script: ${pythonScriptPath} [${noq}, ${aptitudeTypes.join(", ")}]`);

  try {
    exec(`python "${pythonScriptPath}" "${noq}" "${aptitudeTypes.join(",")}"`, (error, stdout, stderr) => {
      if (error) {
        console.error("AI Model Execution Error:", stderr);
        return res.status(500).json({ error: "Failed to generate MCQs", details: stderr });
      }

      try {
        const jsonMatch = stdout.match(/\[.*\]/s);
        if (!jsonMatch) throw new Error("Invalid JSON format");

        const mcqData = JSON.parse(jsonMatch[0]);
        console.log("Generated MCQs:", mcqData);

        if (!mcqData.length) {
          return res.status(400).json({ error: "No MCQs generated" });
        }

        const insertQuery = `
          INSERT INTO mcq_aptitude (question, option1, option2, option3, option4, correct_answer, explanation, topic, difficulty)
          VALUES ?
        `;

        const values = mcqData.map(mcq => [
          mcq.question,
          mcq.options[0],
          mcq.options[1],
          mcq.options[2],
          mcq.options[3],
          mcq.answer,
          mcq.explanation || "No explanation", // Handle missing explanations
          mcq.topic || "General", // Handle missing topics
          "Hard"
        ]);

        dbs.query(insertQuery, [values], (insertErr) => {
          if (insertErr) {
            console.error("DB Insert Error:", insertErr.message);
            return res.status(500).json({ error: "Failed to store MCQs", details: insertErr.message });
          }
          res.json(mcqData);
        });

      } catch (parseError) {
        console.error("JSON Parse Error:", stdout);
        res.status(500).json({ error: "Invalid response from AI model", details: stdout });
      }
    });
  } catch (serverError) {
    console.error("Unexpected Server Error:", serverError);
    res.status(500).json({ error: "Internal server error" });
  }
});


// Fetch top 20 MCQs for Aptitude
app.get("/get-aptitudeq-from-20q", async (req, res) => {
  try {
    const [rows] = await dbs.query(
      `SELECT id, question, option1, option2, option3, option4, correct_answer, explanation, topic, difficulty 
       FROM mcq_aptitude 
       ORDER BY id ASC 
       LIMIT 20;`
    );

    res.json(rows); // Send questions to the frontend
  } catch (error) {
    console.error("Database Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/submit-quiz", (req, res) => {
  const { user_id, quiz_data } = req.body;

  if (!user_id || !quiz_data || quiz_data.length === 0) {
    return res.status(400).json({ error: "Invalid data" });
  }

  let query = "INSERT INTO quiz_results (user_id, question, selected_answer, correct_answer, is_correct, explanation ,qid) VALUES ?";
  let values = quiz_data.map(q => [
    user_id,
    q.question,
    q.selected_answer,
    q.correct_answer,
    q.is_correct,
    q.explanation,
    q.qid
  ]);

  dbs.query(query, [values], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json({ message: "Quiz results saved successfully" });
  });
});


// Fetch Quiz History
app.get('/quiz-result/:userId', async (req, res) => {
  const { userId } = req.params;
  console.log("Received User ID:", userId);  
  try {
    // Use await and pass userId inside an array
    const [rows] = await dbs.query(
      `SELECT * FROM quiz_results WHERE user_id = ?;`,
      [userId] // Pass userId as a parameter
    );

    res.json(rows); // Send questions to the frontend
  } catch (error) {
    console.error("Database Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.get('/quiz-results/:userId', async (req, res) => {
  const { userId } = req.params;
  console.log("Received User ID:", userId);  
  try {
    // Use await and pass userId inside an array
    const [rows] = await dbs.query(
      `SELECT * FROM quiz_results WHERE user_id = ?;`,
      [userId] // Pass userId as a parameter
    );

    res.json(rows); // Send questions to the frontend
  } catch (error) {
    console.error("Database Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});






// Generate and send OTP
app.post('/send-otp', async (req, res) => {
  const { mobile } = req.body;

  try {
    // Check if the mobile number exists
    const [users] = await dbs.query('SELECT * FROM delivery_partners WHERE primary_mobile = ?', [mobile]);
    if (users.length === 0) {
      return res.status(404).json({ message: 'Invalid mobile number or not registered' });
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
    const expiry = Date.now() + 5 * 60 * 1000; // OTP valid for 5 minutes

    // Save OTP and expiry
    await dbs.query(
      'INSERT INTO otp_store (mobile, otp, expiry) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE otp = ?, expiry = ?, attempts = 0',
      [mobile, otp, expiry, otp, expiry]
    );

    // Simulate OTP sending (use an actual SMS gateway in production)
    console.log(`OTP for ${mobile}: ${otp}`);

    return res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Error sending OTP:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Verify OTP
app.post('/verify-otp', async (req, res) => {
  const { mobile, otp } = req.body;

  try {
    const [results] = await dbs.query('SELECT * FROM otp_store WHERE mobile = ?', [mobile]);
    if (
      results.length === 0 || 
      results[0].otp !== otp || 
      Date.now() > results[0].expiry
    ) {
      return res.status(400).json({ message: 'Invalid or expired OTP' });
    }

    // Delete OTP after successful verification
    await dbs.query('DELETE FROM otp_store WHERE mobile = ?', [mobile]);

    // Fetch user details
    const [userDetails] = await dbs.query(
      'SELECT id, role, first_name, last_name, profile_picture_url ,  teacher_department FROM delivery_partners WHERE primary_mobile = ?',
      [mobile]
    );

    res.status(200).json({ message: 'OTP verified', user: userDetails[0] });
  } catch (error) {
    console.error('Error verifying OTP:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});




// Route to get delivery partner by ID
app.get('/delivery-partner/:id', async (req, res) => {
  const { id } = req.params;
  console.log('Received ID:', id);
  

  try {
    const query = 'SELECT * FROM delivery_partners WHERE id = ?';
    const [rows] = await dbs.query(query, [id]);  // Use db.query() directly with the promise version
    console.log('Query Results:', rows); // Log the query result
    if (rows.length > 0) {
      res.status(200).json({
        success: true,
        data: rows[0], // Return the first matching delivery partner
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Delivery partner not found',
      });
    }
  } catch (error) {
    console.error('Error fetching delivery partner:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while fetching delivery partner',
    });
  }
});



// for update the or edit the data of edvelelry man 
app.put('/delivery-partnerr/:id', async (req, res) => {
  const { id } = req.params;
  const {
    first_name,
    last_name,
    primary_mobile,
    city,
    blood_group,
    complete_address,
  } = req.body;

  try {
    const query = `
      UPDATE delivery_partners
      SET first_name = ?, last_name = ?, primary_mobile = ?, city = ?, blood_group = ?, complete_address = ?
      WHERE id = ?
    `;
    const [result] = await dbs.query(query, [first_name, last_name, primary_mobile, city, blood_group, complete_address, id]);
    if (result.affectedRows > 0) {
      res.status(200).json({ success: true, message: 'Profile updated successfully.' });
    } else {
      res.status(404).json({ success: false, message: 'Delivery partner not found.' });
    }
  } catch (error) {
    console.error('Error updating delivery partner:', error);
    res.status(500).json({ success: false, message: 'An error occurred while updating profile.' });
  }
});





















































// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ..............................................................................FOR EDUCATION START FROM HERE .....................................................


// Endpoint for teacher to start attendance
let attendanceActive = false;
let attendanceTimeout;

let teacherLocation = null;
app.post("/start-attendance", (req, res) => {
  const { latitude, longitude } = req.body;

  console.log("Received Data:", req.body); // Debugging

  if (!latitude || !longitude) {
      console.log("Missing latitude or longitude!"); // Debugging
      return res.status(400).json({ success: false, message: "Location required" });
  }

  console.log("Attendance Activated with Location:", latitude, longitude);

  attendanceActive = true;
  teacherLocation = { latitude, longitude };

  setTimeout(() => {
      console.log("Attendance Timer Expired, Resetting!");
      attendanceActive = false;
      teacherLocation = null;
  }, 10 * 60 * 1000); // Stop after 10 minutes

  res.json({ success: true, message: "Attendance started for 10 minutes" });
});


app.get("/attendance-status", (req, res) => {
    res.json({ attendanceActive, teacherLocation });
});

// app.post("/start-attendance", (req, res) => {
//     attendanceActive = true;

//     // Set a timeout to disable attendance after 10 minutes
//     clearTimeout(attendanceTimeout);
//     attendanceTimeout = setTimeout(() => {
//         attendanceActive = false;
//     }, 100 * 60 * 10000); // 10 minutes

//     res.json({ success: true, message: "Attendance tracking started for 10 minutes." });
// });

// Mark Attendance API
app.post("/mark-attendance", async (req, res) => {
  if (!attendanceActive) {
      return res.status(403).json({ success: false, message: "Attendance is not active." });
  }

  const { partner_id } = req.body;
  console.log("Received Partner ID:", partner_id);

  try {
      const [results] = await dbs.query(
          "SELECT * FROM delivery_partners WHERE id = ? AND role = 1 AND department = 'IT'",
          [partner_id]
      );

      if (results.length === 0) {
          return res.status(403).json({ success: false, message: "Unauthorized or not found" });
      }

      const partner = results[0];

      const insertSQL = `
          INSERT INTO attendance_of_IT_sheet 
          (partner_id, first_name, last_name, department, attendance_status) 
          VALUES (?, ?, ?, ?, 'Present')
      `;

      const [insertResult] = await dbs.query(insertSQL, [
          partner.id,
          partner.first_name,
          partner.last_name,
          partner.department
      ]);

      console.log("Attendance Insert Result:", insertResult);
      res.json({ success: true, message: "Attendance marked successfully." });

  } catch (error) {
      console.error("Database Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
  }
});


      
    

// API to check attendance status
app.get("/attendance-status", (req, res) => {
    res.json({ attendanceActive });
});






// // for teacher 

// app.post("/add-lecture", async (req, res) => {
//   console.log("Received Data:", req.body);
//   try {
//     const { id, first_name, last_name, subject_name, class_name, division, start_time, end_time } = req.body;

//     if (!id || !first_name || !last_name || !subject_name || !class_name || !division || !start_time || !end_time) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     await dbs.query(
//       "INSERT INTO lectures (teacher_id, first_name, last_name, subject_name, class, division, start_time, end_time) VALUES (?, ?, ?, ?, ?, ?, ?,?)",
//       [id, first_name, last_name, subject_name, class_name, division, start_time, end_time]
//     );
    

//     res.json({ message: "Lecture added successfully!" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error adding lecture" });
//   }
// });

app.post("/add-lecture", async (req, res) => {
  console.log("Received Data:", req.body);
  try {
    const { id, first_name, last_name, subject_name, class_name, division, start_time, end_time, for_everyday, teacher_department } = req.body;

    if (!id || !first_name || !subject_name || !class_name || !division || !start_time || !end_time) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await dbs.query(
      "INSERT INTO lectures (teacher_id, first_name, last_name, subject_name, class, division, start_time, end_time, for_everyday, teacher_department) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?)",
      [id, first_name, last_name, subject_name, class_name, division, start_time, end_time, for_everyday, teacher_department]
    );

    res.json({ message: "Lecture added successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding lecture" });
  }
});


app.get("/get-lectures", async (req, res) => {
  try {
      const [lectures] = await dbs.query("SELECT * FROM lectures ORDER BY created_at DESC");
      res.json(lectures);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching lectures" });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
