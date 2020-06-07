const forms = () => {
  const form = document.querySelectorAll("form"),
        input = document.querySelectorAll("input"),
        phoneInput = document.querySelectorAll("input[name='user_phone']"),
        message = {
            loading : "Загрузка...",
            success: "Спасибо, скоро с Вами свяжутся!",
            error: "Что-то пошло не так..."
        }
    
    phoneInput.forEach(item => {
     item.addEventListener("input", () => {
       item.value = item.value.replace(/\D/,"");
     });
    });

    const postData = async (url,data) => {
        document.querySelector(".status").textContent = message.loading;
        let res = await fetch(url, {
          method: "POST",
          body: data
        });
         console.log(data);
        return await res.text();
    };

    const clearInputs = () => {
        input.forEach(item => {
            item.value = "";
        });
    }

    form.forEach(item => {
       item.addEventListener("submit", (e) => {
            e.preventDefault();

            let statusMessage = document.createElement("div");
            statusMessage.classList.add("status");
            item.appendChild(statusMessage);

            const formData = new FormData(item);
          
            postData("assests/server/server.php",formData)
             .then(res => {
                 console.log(res);
                 statusMessage.textContent = message.success;
             })
             .catch(() => {
                statusMessage.textContent = message.error;
             })
             .finally(() => {
              clearInputs();
              setTimeout(() => {
                 statusMessage.remove() 
              }, 5000); 
            });
       });
    });
};

export default forms;