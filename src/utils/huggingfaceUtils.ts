import { HuggingFaceTransformersEmbeddings } from "langchain/embeddings/hf_transformers";
import { HuggingFaceInferenceEmbeddings } from "langchain/embeddings/hf";

export const huggingFaceEmbeddings = new HuggingFaceInferenceEmbeddings({
  apiKey: "YOUR-API-KEY", // In Node.js defaults to process.env.HUGGINGFACEHUB_API_KEY
});


export const huggingFaceModel = new HuggingFaceTransformersEmbeddings({
  modelName: "Xenova/all-MiniLM-L6-v2",
});




