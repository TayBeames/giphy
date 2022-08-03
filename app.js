console.log("Let's get this party started!");
const $searchInput = $('#search');
const $addGif = $("#gif-result");

function addGif(res){
    let numResults = res.data.length;
    let randomGif = Math.floor(Math.random() * (numResults));
    let image = document.createElement('img');
    image.src = res.data[randomGif].images.original.url;
    $addGif.append(image);
};

$('form').on('submit', async function(event){
    event.preventDefault();

    let searchInfo = $searchInput.val(); 
          

const response = await axios.get("http://api.giphy.com/v1/gifs/search", { 
    params: {
        q: searchInfo,
        api_key: "nsBbLTcUxczKoNaKfvGNVrNaNo75J4eU"
    }
    });     
    addGif(response.data) 
    $("#remove").on("click", function(){
        $addGif.empty();
    });    
});


    