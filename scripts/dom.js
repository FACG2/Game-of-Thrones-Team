// Get Character short Bio From Game of Thrones API
function getFromGOT(name) {
  var xhr = new XMLHttpRequest();
  var character = {};
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = {};
      if (xhr.responseText !== "")
        data = JSON.parse(xhr.responseText);
      // console.log(data);
       character = {
        name: data.data.name,
        gender: data.data.male,
        culture: data.data.culture,
        house: data.data.house,
        books: data.data.books,
        titles: data.data.titles
      };
      // console.log(character);
      characterInfo = character;
      console.log("This is From GOT API", character);
    };
  };
  xhr.open("GET", 'https://api.got.show/api/characters/'+name, true);
  xhr.send();
  // return character;
};
var characterInfo = {};
// getFromGOT();

/*
  Name
  Gender
  Spouse
  Culture
  House
  Books
  Titles
 */

var ids = [
   269623,
   466865,
   340200,
   458492,
   335382,
   269625,
   458480,
   269626,
   323452,
   430070,
   430068,
   458499,
   458500,
   322484
];

var characters = {};

//Get Actor name From TMDB API
function getFromTMDB(characterName, callback){
  ids.map(function(id){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if (xhr.readyState == 4 && xhr.status == 200){
        var data = JSON.parse(xhr.responseText);
        data.cast.map(function(val){
          characters[val.character.trim().replace(/(voice)/g, "").trim().replace(/ /g,"").replace(/[()\']/g, "")] = val.name;
        });
      };
    };
    var URL = "http://api.themoviedb.org/3/movie/"+ id +"/casts?api_key=bfd5274ec186e4bf6e99f1d3b76cdb1b";
    xhr.open("GET" ,URL , true);
    xhr.send();
  });

  characterName = characterName.replace(/[_ ]/g, "");
  console.log(characterName);

  if(callback)
   return callback;
}

// getFromTMDB("Bran Stark");

// console.log(getFromGOT("Jon Snow"));
// getFromGOT("Jon( Snow");

// Get Actor description From Wiki media api
function getFromWiki(realName) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.responseText);
    }
  }
  xhr.open("GET", "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + realName, true);
  xhr.send();
}
function process(fakeName){
  getFromGOT(fakeName);
  getFromTMDB(fakeName, getFromWiki("JeromeFlynn"));
}

process("Jon Snow");
