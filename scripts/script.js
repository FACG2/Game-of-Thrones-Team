// Variables
var images = {
  petyrbaelish: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/peytr-baelish-littlefinger-512x512.jpg",
  brienneoftarth: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/brienne-of-tarth-512x512.jpg",
  bronn: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/bronn-512x512.jpg",
  sandorcleganethehound: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/sandor-clegane-512x512.jpg",
  bericdondarrion: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/beric-dondarrion-512x512.jpg",
  archmaesterebrose: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/archmaester-ebrose-512x512.jpg",
  gilly: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/gilly-512x512.jpg",
  eurongreyjoy: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s6/euron-greyjoy-512x512.jpg",
  theongreyjoy: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/theon-greyjoy-512x512.jpg",
  cerseilannister: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/cersei-lannister-512x512.jpg",
  jaimelannister: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/jaime-lannister-512x512.jpg",
  tyrionlannister: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/tyrion-lannister-512x512.jpg",
  melisandre: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/melisandre-512x512.jpg",
  missandei: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/missandei-512x512.jpg",
  jorahmormont: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/jorah-mormont-512x512.jpg",
  mhorosofmyr: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/thoros-of-myr-512x512.jpg",
  ellariasand: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/ellaria-sand-512x512.jpg",
  nymsand: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/nymeria-sand-512x512.jpg",
  obarasand: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/obara-sand-512x512.jpg",
  tyenesand: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/tyene-sand-512x512.jpg",
  davosseaworth: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/davos-seaworth-512x512.jpg",
  jonsnow: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/jon-snow-512x512.jpg",
  aryastark: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/arya-stark-512x512.jpg",
  branstark: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/bran-stark-512x512.jpg",
  sansastark: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/sansa-stark-512x512.jpg",
  daenerystargaryen: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/daenerys-targaryen-512x512.jpg",
  dickontarly: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/dickon-tarly-512x512.jpg",
  samwelltarly: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/samwell-tarly-512x512.jpg",
  randylltarly: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/randyll-tarly-512x512.jpg",
  tormund: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/tormund-512x512.jpg",
  olennatyrell: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/olenna-tyrell-512x512.jpg",
  varys: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/maetser-varys-512x512.jpg",
  maesteraemon: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/aemon-targaryen-512x512.jpg",
  lysaarryn: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/lysa-arryn-512x512.jpg",
  robinarryn: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/robyn-arryn-512x512.jpg",
  joffreybaratheon: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/joffrey-512x512.jpg",
  myrcellabaratheon: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/myrcella-baratheon-512x512.jpg",
  renlybaratheon: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/renly-baratheon-512x512.jpg",
  robertbaratheon: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/robert-baratheon-512x512.jpg",
  stannisbaratheon: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/stannis-512x512.jpg",
  tommenbaratheon: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/tommon-baratheon-512x512.jpg",
  ramsaybolton: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/ramsay-512x512.jpg",
  roosebolton: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/roose-bolton-512x512.jpg",
  jorycassel: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/jory-cassel-512x512.jpg",
  rodrikcassel: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/ser-rodrik-cassel-512x512.jpg",
  ladycrane: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s6/lady-crane-512x512.jpg",
  khaldrogo: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/khal-drogo-512x512.jpg",
  syrioforel: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/syrio-forel-512x512.jpg",
  gendry: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/gendry-512x512.jpg",
  grenn: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/grenn-512x512.jpg",
  balongreyjoy: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/balon-greyjoy-512x512.jpg",
  yaragreyjoy: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/yara-greyjoy-512x512.jpg",
  jaqenhghar: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/jaqen-hghar-512x512.jpg",
  highpriestess: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s6/high-priestess-512x512.jpg",
  hodor: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/hodor-512x512.jpg",
  areohotah: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/areo-hotah-512x512.jpg",
  illyrio: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/magister-illyrio-160.jpg",
  irri: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/irri-512x512.jpg",
  izembaro: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/izembaro-512x512.jpg",
  rickardkarstark: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/karstark-512x512.jpg",
  lancellannister: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/lancel-lannister-512x512.jpg",
  tywinlannister: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/tywin-lannister-512x512.jpg",
  maesterluwin: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/maester-luwin-512x512.jpg",
  marillion: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/marillion-512x512.jpg",
  doranmartell: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/doran-martell-512x512.jpg",
  oberynmartell: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/oberyn-512x512.jpg",
  trystanemartell: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/trystane-martell-512x512.jpg",
  mirrimazDuur: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/mirri-maz-duur-512x512.jpg",
  septamordane: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/septa-mordane-512x512.jpg",
  jeormormont: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/jeor-mormont-512x512.jpg",
  khalmoro: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s6/khal-moro-512x512.jpg",
  daarionaharis: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/daario-naharis-512x512.jpg",
  orell: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/orell-512x512.jpg",
  brotherray: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s6/brother-ray-512x512.jpg",
  mancerayder: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/mance-rayder-512x512.jpg",
  osha: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/osha-512x512.jpg",
  podrickpayne: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/podrick-payne-512x512.jpg",
  grandmaesterpycelle: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/maester-pycelle-512x512.jpg",
  pyp: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/pyp-512x512.jpg",
  qyburn: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/qyburn-512x512.jpg",
  rattleshirt: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/rattleshirt-512x512.jpg",
  ros: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/ros-512x512.jpg",
  barristanselmy: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/barristan-selmy-512x512.jpg",
  shae: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/shae-512x512.jpg",
  janosslynt: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/janos-slynt-512x512.jpg",
  highsparrow: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/high-sparrow-512x512.jpg",
  benjenstark: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/benjen-stark-512x512.jpg",
  catelynstark: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/catelyn-stark-512x512.jpg",
  eddardnedstark: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/eddard-ned-stark-512x512.jpg",
  rickonstark: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/rickon-stark-512x512.jpg",
  robbstark: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/robert-stark-512x512.jpg",
  talisastark: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/talisa-stark-512x512.jpg",
  viserystargaryen: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/viserys-targaryen-512x512.jpg",
  alliserthorne: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/allister-thorne-512x512.jpg",
  bryndentheblackfishtully: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/blackfish-tully-512x512.jpg",
  margaerytyrell: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/margarey-tyrell-512x512.jpg",
  ygritte: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/ygritte-512x512.jpg"
}
var ids = [269623,466865,340200,458492,335382,269625,458480,269626,323452,430070,430068,458499,458500,322484];
var characterInfo = {};
var characters = {};
var realName = "";
var str = document.querySelector("input[type='text']");

// Get Character short Bio From Game of Thrones API
function getFromGOT(name) {
  var xhr = new XMLHttpRequest();
  var character = {};
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = {};
      if (xhr.responseText !== "")
        data = JSON.parse(xhr.responseText);
       character = {
        name: data.data.name,
        gender: data.data.male,
        culture: data.data.culture,
        house: data.data.house,
        books: data.data.books,
        titles: data.data.titles
      };
      characterInfo = character;
      // console.log("This is From GOT API", characterInfo);
      document.querySelector(".character-name").textContent = "Name: " + characterInfo.name;
      var gender = "female";
      if(characterInfo.gender)  gender = "male";
      document.querySelector(".character-gender").textContent = "Gender: " + gender;
      var culture = "unknown";
      if(characterInfo.culture) culture = characterInfo.culture;
      document.querySelector(".character-culture").textContent = "Culture: " + culture;
      var house = "unknown";
      if(characterInfo.house) house = characterInfo.house;
      document.querySelector(".character-house").textContent = "House: " + house;
      // Name Gender Culture House Books Titles
      var str = "Titles: ";
      if(characterInfo.titles.length <= 3)
        for(var i =0 ; i < 3 ; ++i)
          if(characterInfo.titles[i])
            str += characterInfo.titles[i] + ", ";
      // console.log("HERE IS CHARACTER INFO" , characterInfo);
      // alert(str);
      if(str === "Titles: ") str += "No Titles Found";

      document.querySelector(".character-titles").textContent = str;
      str = "Books: ";
      if(characterInfo.books.length <= 3)
        for(var i =0 ; i < 3 ; ++i)
          if(characterInfo.books[i])
            str += characterInfo.books[i] + ", ";
      if(str === "Books: ") str += "No Books Found";
      document.querySelector(".character-books").textContent = str;
    };
  };
  xhr.open("GET", 'https://api.got.show/api/characters/'+name, true);
  xhr.send();
};

//Get Actor name From TMDB API
function getFromTMDB(characterName, /* , callback*/){
  ids.map(function(id){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if (xhr.readyState == 4 && xhr.status == 200){
        var data = JSON.parse(xhr.responseText);
        data.cast.map(function(val){
          characters[val.character.trim().replace(/(voice)/g, "").trim().replace(/ /g,"").replace(/[()\']/g, "")] = val.name;
        });
        // alert(realName);
        // if(callback)
        //   return callback;
      };
    };
    var URL = "http://api.themoviedb.org/3/movie/"+ id +"/casts?api_key=bfd5274ec186e4bf6e99f1d3b76cdb1b";
    xhr.open("GET" ,URL , true);
    xhr.send();
  });
  // console.log('This is Characters Console.log ', characters);
  characterName = characterName.replace(/[_ ]/g, "");
  realName = characters[characterName];
  // alert(realName);
  // alert(characterName);
  // console.log(characterName);
}


// // Get Actor description From Wiki media api
// function getFromWiki(realName) {
//   var xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       var data = JSON.parse(xhr.responseText);
//       // console.log(data);
//       document.querySelector('.info2').innerHTML = data.query.search[0].snippet;
//       // console.log(data.query.search);
//     }
//   }
//   // if(!realName){
//   //   document.querySelector(".info2").textContent = "Oops!! \nActor Not Found !!!!";
//   // }
//   xhr.open("GET", "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + realName + "&format=json", true);
//   xhr.setRequestHeader( 'Api-User-Agent', 'Example/1.0' );
//   xhr.send();
// }

// getFromWiki('Kit Harington');

// Get Image URL From Image Object
function getImage(name){
  name = name.replace(/[\s\'_]/g,"")
  // console.log("getFromImage Function ==> " + images[name]);
  document.querySelector("img").src = images[name];
};

// Assemble All Functions Together
function process(fakeName){
  getFromGOT(fakeName);
  getFromTMDB(fakeName);
  getImage(fakeName);
}

document.querySelector("#form").addEventListener('submit', function(event){
  event.preventDefault();
  process(str.value.toLowerCase());
});

// document.querySelector("img").src = images["JonSnow"];
