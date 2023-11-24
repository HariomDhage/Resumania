const apiKey = 'g1jbv7F304u7m4xApSfWaRPY30FAv8yL';
const apiUrl = 'https://api.apilayer.com/resume_parser/upload';
const file1 = './Users/latishadwani/Developer/Geekathon/assets/resume.docx'
// Listen for changes in the file input
// document.querySelector('.analyse-button').addEventListener('click', () => {
//   const fileInput = document.getElementById('picture');
//   const file = fileInput.files[0];

//   if (file) {
//     const formData = new FormData();
//     formData.append('file', file1);

//     const result = fetch(apiUrl, {
//       method: 'POST',
//       headers: {
//         'apikey': apiKey,
//       },
//       body: formData,
//     })
//       .then(response => response.json())
//       .then(data => {
//         const resultDiv = document.querySelector('.result');
//         resultDiv.innerHTML = `<p>${JSON.stringify(data)}</p>`;
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }
// });



let myHeaders = new Headers();
myHeaders.append("apikey", "g1jbv7F304u7m4xApSfWaRPY30FAv8yL");

let requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};
fetch("https://api.apilayer.com/resume_parser/url?url=url", requestOptions)
  .then(response => response.text())
  .then(result => {
    const resultDiv = document.querySelector('.result');
    resultDiv.innerHTML = `<p>${JSON.stringify(result)}</p>`;
  })
  .catch(error => console.log('error', error));
  /*slider//////////////////////////////////////////////*/
 

      //======== tiny slider for slider-items-active
      tns({
         autoplay: true,
         autoplayButtonOutput: false,
         mouseDrag: true,
         gutter: 0,
         container: ".slider-items-active",
         center: false,
         nav: true,
         navPosition: "bottom",
         controls: false,
         speed: 400,
         controlsText: [
            '<i class="lni lni-arrow-left-circle"></i>',
            '<i class="lni lni-arrow-right-circle"></i>',
         ],
         responsive: {
            0: {
               items: 1,
            },

            768: {
               items: 2,
            },
            992: {
               items: 3,
            },
         },
      });
