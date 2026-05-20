require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

app.post("/api/ticket", async (req, res) => {

  try{

    const {
      username,
      category,
      message
    } = req.body;

    const payload = {

      embeds:[
        {

          title:"??? New Support Ticket",

          color:16777215,

          fields:[

            {
              name:"User",
              value:username,
              inline:true
            },

            {
              name:"Category",
              value:category,
              inline:true
            },

            {
              name:"Message",
              value:message
            }

          ],

          footer:{
            text:"Golden State RP Support Center"
          },

          timestamp:new Date()

        }
      ]

    };

    const response = await fetch(
      process.env.WEBHOOK_URL,
      {

        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify(payload)

      }
    );

    if(!response.ok){
      throw new Error("Webhook Failed");
    }

    res.status(200).json({
      success:true
    });

  }

  catch(error){

    console.error(error);

    res.status(500).json({
      success:false
    });

  }

});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});