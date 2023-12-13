import axios from "axios";
import prompt from "prompt";

var schema = {
  properties: {
    number: {
      type: "number",
      description:
        "Lütfen bilgilerini görmek istediğiniz kullanıcı ID'sini yazınız",
      maximum: 10,
      minimum: 1,
      message: "Bir ve on arasında bir sayı olmalı.",
      required: true,
    },
  },
};

const getUserData = async () => {
  prompt.start();
  const { number } = await prompt.get(schema);

  const userData = await axios
    .get(`https://jsonplaceholder.typicode.com/users/${number}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log("Bir hata oluştu.");
    });

  const postData = await axios
    .get(`https://jsonplaceholder.typicode.com/posts?userId=${number}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log("Bir hata oluştu.");
    });
};

export default getUserData;
