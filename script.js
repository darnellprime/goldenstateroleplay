/* NAVBAR BACKGROUND */

window.addEventListener("scroll", () => {

  const header =
  document.querySelector("header");

  if(window.scrollY > 50){

    header.style.background =
    "rgba(0,0,0,0.9)";

  }

  else{

    header.style.background =
    "rgba(0,0,0,0.6)";

  }

});

/* TICKET SYSTEM */

const form =
document.getElementById("ticketForm");

if(form){

  const successMessage =
  document.getElementById("successMessage");

  form.addEventListener("submit",
  async (e) => {

    e.preventDefault();

    const username =
    document.getElementById("username").value;

    const category =
    document.getElementById("category").value;

    const message =
    document.getElementById("message").value;

    try{

      const response =
      await fetch(
      "http://localhost:3000/api/ticket",
      {

        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify({
          username,
          category,
          message
        })

      });

      if(response.ok){

        successMessage.style.display =
        "block";

        form.reset();

      }

      else{

        alert(
        "Failed to submit ticket."
        );

      }

    }

    catch(error){

      alert(
      "Server connection failed."
      );

    }

  });

}