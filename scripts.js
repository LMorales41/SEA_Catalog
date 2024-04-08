/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */



// To not use API calls or Libraries I have directly loaded this data
// All data used here was written by me and can be more cleanly viewed seperately in files in this same directory


// This will be converted into a 2D array
const csvData = `album_name,year_released,no_of_songs,order_released,single,solo,title_track
the_story_begins,2015,6,1,false,false,like_ooh-ahh
page_two,2016,6,1,false,false,cheer_up
twicecoaster:lane_1,2016,7,2,false,false,tt
twicecoaster:lane_2,2017,8,1,false,false,knock_knock
signal,2017,6,2,false,false,signal
twicetagram,2017,13,3,false,false,likey
merry_&_happy,2017,15,4,false,false,heart_shaker
what_is_love_?,2018,5,1,false,false,what_is_love
summer_nights,2018,9,2,false,false,dance_the_night_away
yes_or_yes,2018,7,3,false,false,yes_or_yes
fancy_you,2019,6,1,false,false,fancy
feel_special,2019,7,2,false,false,feel_special
more_&_more,2020,7,1,false,false,more_&_more
eyes_wide_open,2020,13,2,false,false,i_can't_stop_me
cry_for_me,2020,1,3,true,false,cry_for_me
taste_of_love,2021,6,1,false,false,alcohol-free
the_feels,2021,9,2,true,false,the_feels
formula_of_love:_O+T=<3,2021,16,3,false,false,scientist
im_nayeon,2022,7,1,false,true,pop!
between_1&2,2022,7,2,false,false,talk_that_talk
moonlight_sunrise,2023,1,1,true,false,moonlight_sunrise
ready_to_be,2023,7,2,false,false,set_me_free
zone,2023,7,3,false,true,killin'_me_good
i_got_you,2024,1,1,true,false,i_got_you
with_you-th,2024,6,2,false,false,one_spark`;

// This is an array containing all URLs necessary for my images
const albumUrls = [
    "https://lv2-cdn.azureedge.net/twice/a68274bbdd254344afaa8ad9c0b5151f-THE_STORY_BEGINS.jpg",
    "https://lv2-cdn.azureedge.net/twice/PAGE_TWO.jpg",
    "https://lv2-cdn.azureedge.net/twice/TWICEcoaster_LANE_1.jpg",
    "https://lv2-cdn.azureedge.net/twice/TWICEcoaster_LANE_2.jpg",
    "https://lv2-cdn.azureedge.net/twice/TWICE_SIGNAL.jpg",
    "https://lv2-cdn.azureedge.net/twice/twicetagram.jpg",
    "https://lv2-cdn.azureedge.net/twice/Merry&Happy(2).jpg",
    "https://lv2-cdn.azureedge.net/twice/What_is_Love.jpg",
    "https://lv2-cdn.azureedge.net/twice/Summer_Nights.jpg",
    "https://lv2-cdn.azureedge.net/twice/YES_or_YES.jpg",
    "https://lv2-cdn.azureedge.net/twice/FANCY_YOU.jpg",
    "https://lv2-cdn.azureedge.net/twice/Feel_Special.jpg",
    "https://lv2-cdn.azureedge.net/twice/MORE_MORE(1).jpg",
    "https://lv2-cdn.azureedge.net/twice/9bafe5921dd74c659fc9c0ec89be5f30-087570ec6c704f11a18c23f4177b4a7a-TWICE%20EYES%20WIDE%20OPEN_ONLINECOVER.jpg",
    "https://lv2-cdn.azureedge.net/twice/fa697b89e1a1403d825b5571eb002683-214d4ba8b19e44999403fa60512c2087-CRY%20FOR%20ME.jpg",
    "https://lv2-cdn.azureedge.net/twice/e71950abded14ecab2fccc6643099427-0a4c54764dff4aa795de975f93178439-%EC%98%A8%EB%9D%BC%EC%9D%B8%EC%BB%A4%EB%B2%84_%EB%B3%80%EA%B2%BD.jpg",
    "https://lv2-cdn.azureedge.net/twice/f68d14eb7af247e2a816e6f118c978af-5b2b53c4654743fe809234c297a56ef1-TW-TheFeels-OnlineCover_0817.jpg",
    "https://lv2-cdn.azureedge.net/twice/b907e27dfe5041f99ce3fade2d44fbb8-d2b894fb350d437fa6884a35de893609-TWICE-FOL-ONLINE%20COVER_%EC%B5%9C%EC%A2%85.jpg",
    "https://lv2-cdn.azureedge.net/twice/161be9dcda7d4581a123b2f7b6cbeafb-bd9cbcf3b8ef4aa4beee466ef75a8af4-TW-NY-IMNAYEON_OnlineCover.jpg",
    "https://lv2-cdn.azureedge.net/twice/3c3a44867b7a4acba8838458c168e448-BETWEEN%201&2.jpg",
    "https://lv2-cdn.azureedge.net/twice/2aab47197e5740d9ba4f248b8c948770-873e5183d95e43ebb218c5bca6f7302b-TW-M12-MLSR-Online%20Cover.jpg",
    "https://lv2-cdn.azureedge.net/twice/5c25a76305b54cb5aa2feb5bc7b51956-1f9dc33bea4d4b0f8e897455416c38a7-TWICE%2012TH%20MINI%20ALBUM%20Online%20Cover.jpg",
    "https://lv2-cdn.azureedge.net/twice/c14107d29cc14dd689366ce267bcd46e-TW-JH-M1-OnlineCover.jpg",
    "https://lv2-cdn.azureedge.net/twice/ef9153801e634131bc6bd9c9d82fc2cd-TW-M13-OnlineCover-I%20got%20you.jpg",
    "https://lv2-cdn.azureedge.net/twice/4b23b71065d448f0813e7fcb62d76bb8-TW-M13-OnlineCover-WithYouth.jpg"
];


// Album class to abstract away each array containing an Album's data into an object
// Will contain all data for each album, contains data for soloist as well as there are only 2 soloists.
class Album 
{

    //basic constructor 
    constructor()
    {
        this.album_name = "";
        this.year_released = 0;
        this.no_of_songs = 0;
        this.order_released = 0;
        this.single = "";
        this.solo = "";
        this.title_track = "";
        this.soloist = "";
    }

    //instead fill all variables with the given columns(arrays) from the 2d array
    create_from_array(array) {
        this.album_name = array[0];
        this.year_released = array[1];
        this.no_of_songs = array[2];
        this.order_released = array[3];
        this.single = array[4];
        this.solo = array[5];
        this.title_track = array[6];
        let soloCheck = this.solo;
        if (soloCheck === 'true') {
            if (this.album_name === 'zone') {
                this.soloist = "jihyo";
            } else {
                this.soloist = "nayeon";
            }
        }
        else 
        {
            this.soloist = "none";
        }
    }

}

// This is a 2D array of strings (Contains columns as item 0)
// From item 1 and onward it looks like : [[*Album_Name*, *Year_released*_...],...]
const data2DArray = csvData.split('\n').map(row => row.split(','));
const objectArray = createAlbumsArray(data2DArray);


const FRESH_PRINCE_URL = "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL = "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL = "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// This is an array of strings (TV show titles)
let titles = [
    "Fresh Prince of Bel Air",
    "Curb Your Enthusiasm",
    "East Los High",
    "My Cat"
];
// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    // for (let i = 0; i < titles.length; i++) {
    //     let title = titles[i];
    for (let i = 0; i < 20; i++){
        let selectedAlbum = objectArray[i];

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
        let imageURL = albumUrls[i];
        // if (i == 0) {
        //     imageURL = albumUrls[i+20];
        // } else if (i == 1) {
        //     imageURL = albumUrls[i+20];
        // } else if (i == 2) {
        //     imageURL = albumUrls[i+20];
        // }

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, selectedAlbum.album_name, imageURL); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, newTitle, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}


function createAlbumsArray(discographyData)
{
    rows = discographyData.length;
    columns = discographyData[0].length;
    let albumObjects = [];

    for (let i = 1; i < rows; i++)
    {
        let singleCheck = discographyData[i][4]; // checks for if the album is a single (single col is 4)
        let soloCheck = discographyData[i][5]; // checks if album is solo (solo col is 5)
        let currentAlbum = new Album();


        // Fill the album instance with data from discographyData
        currentAlbum.create_from_array(discographyData[i]);
    
        // Push the filled album instance into the albums array
        albumObjects.push(currentAlbum);
    }

    return albumObjects;
}


// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);



function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}


