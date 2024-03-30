const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
GOOGLE_PALM_API_KEY="AIzaSyBFnKznQmrL-EKWpZx9ptnVM55k7F5Lt7E"
const app = express();
app.use(express.json());
app.use(cors());

promptAnswer=""
cl=require("langchain/document_loaders/fs/csv");
GP=require("@langchain/community/llms/googlepalm");
GPE=require("@langchain/community/embeddings/googlepalm")
FS=require("@langchain/community/vectorstores/faiss")
LC=require("langchain/chains")


const llm = new GP.GooglePaLM({
  apiKey:GOOGLE_PALM_API_KEY, // or set it in environment variable as `GOOGLE_PALM_API_KEY`
  // other params
  temperature: 0.6, // OPTIONAL 0 or 1
  modelName: "models/text-bison-001", // OPTIONAL
  maxOutputTokens: 1024, // OPTIONAL
  topK: 40, // OPTIONAL
  // topP: 3, // OPTIONAL
  safetySettings: [
    // OPTIONAL
    {
      category: "HARM_CATEGORY_DANGEROUS",
      threshold: "BLOCK_MEDIUM_AND_ABOVE",
    },
  ],
  stopSequences: ["stop"], // OPTIONAL
});
//trainig model with my own data

const run = async () => {
  //Loading the document
  const loader = new cl.CSVLoader("./jigyashuu.csv",source_column='prompt',target_column='response');
  const docs =  await loader.load();
  // var a=[...docs]
  // console.log(docs)
  
  // Embedding the document in  vector
  let pageContents = docs.map(doc => doc.pageContent);
  const model = new GPE.GooglePaLMEmbeddings({
    apiKey: GOOGLE_PALM_API_KEY, // or set it in environment variable as `GOOGLE_PALM_API_KEY`
    modelName: "models/embedding-gecko-001", // OPTIONAL
  });
  
  const res = await model.embedDocuments(
    pageContents
  );
  // console.log(pageContents);
  
  //storing the vector in the vector store

const vectorStore = await FS.FaissStore.fromDocuments(
    docs,
    model
);

// const SimilarityCheck=await vectorStore.similaritySearch("which is his skills",1)
// console.log(SimilarityCheck)
// retriever = vectorStore.asRetriever();

// Create a chain that uses the OpenAI LLM and HNSWLib vector store.
// Create a chain that uses a map reduce chain and HNSWLib vector store.
const chain = LC.RetrievalQAChain.fromLLM(llm, vectorStore.asRetriever(), {
  returnSourceDocuments: true, // Can also be passed into the constructor
});
const result = await chain.call({
  query: "what is jigyashu qualification ?",
});
// console.log(JSON.stringify(result, null, 2));


}
// run()


  




// getData()




app.post('/chat',async (req,res)=>{  
    
  const model = new GP.GooglePaLM({
    apiKey:GOOGLE_PALM_API_KEY, // or set it in environment variable as `GOOGLE_PALM_API_KEY`
    // other params
    temperature: 0, // OPTIONAL 0 or 1
    modelName: "models/text-bison-001", // OPTIONAL
    maxOutputTokens: 1024, // OPTIONAL
    topK: 40, // OPTIONAL
    // topP: 3, // OPTIONAL
    safetySettings: [
      // OPTIONAL
      {
        category: "HARM_CATEGORY_DANGEROUS",
        threshold: "BLOCK_MEDIUM_AND_ABOVE",
      },
    ],
    stopSequences: ["stop"], // OPTIONAL
  });
  const r = await model.invoke(
  req.body.text
  );
  const data={text:r}
  res.json(data)

})
app.get('/',(req,res)=>{
    // run()
    res.send('Hello World');
})

app.listen(3000,()=>{
    // run()
    console.log('Server is running on port 3000');
})