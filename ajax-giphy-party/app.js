console.log("Let's get this party started!");
const $searchInput = $('#search');
const $addGif = $("#gif-result");



$('form').on('submit', async function(event){
    event.preventDefault();

    let searchInfo = $searchInput.val("");       

    const res = await axios.get("http://api.giphy.com/v1/gifs/search", { 
    params: {
        q: searchInfo,
        api_key: "nsBbLTcUxczKoNaKfvGNVrNaNo75J4eU"
    }
    
    }); 
    $addGif(res.data);
});
