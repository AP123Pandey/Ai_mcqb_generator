import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeApiKey = async (apiKey) => {
  try {
    await AsyncStorage.setItem('OPENAI_API_KEY', apiKey);
  } catch (error) {
    console.error("Error storing API Key:", error);
  }
};

export const getApiKey = async () => {
  try {
    return await AsyncStorage.getItem('OPENAI_API_KEY');
  } catch (error) {
    console.error("Error retrieving API Key:", error);
    return null;
  }
};
