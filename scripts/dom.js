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
var realName = "";

//Get Actor name From TMDB API
function getFromTMDB(characterName, callback){
  ids.map(function(id){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if (xhr.readyState == 4 && xhr.status == 200){
        var data = JSON.parse(xhr.responseText);
        data.cast.map(function(val){
          characters[val.character.trim().replace(/(voice)/g, "").trim().replace(/ /g,"").replace(/[()\']/g, "")] = val.name;
          readName = val.name;
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

// Get Actor description From Wiki media api
function getFromWiki(realName) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = JSON.parse(xhr.responseText);
      console.log(data);
    }
  }
  xhr.open("GET", "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + realName + "&format=json", true);
  xhr.setRequestHeader( 'Api-User-Agent', 'Example/1.0' );
  xhr.send();
}

function process(fakeName){
  getFromGOT(fakeName);
  getFromTMDB(fakeName, getFromWiki("KitHarington"));
  getImage("Jon Snow");
}

function getImage(name){
  name = name.trim().replace(/[\s\'_]/g,"")
};

// getFromWiki("AidanGillen");

process("Jon Snow");

var images = {
  PetyrBaelishLittlefinger: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/peytr-baelish-littlefinger-512x512.jpg",
  BrienneofTarth: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/brienne-of-tarth-512x512.jpg",
  Bronn: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/bronn-512x512.jpg",
  SandorCleganeTheHound: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/sandor-clegane-512x512.jpg",
  BericDondarrion: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/beric-dondarrion-512x512.jpg",
  ArchmaesterEbrose: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/archmaester-ebrose-512x512.jpg",
  Gilly: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/gilly-512x512.jpg",
  EuronGreyjoy: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s6/euron-greyjoy-512x512.jpg",
  TheonGreyjoy: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/theon-greyjoy-512x512.jpg",
  CerseiLannister: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/cersei-lannister-512x512.jpg",
  JaimeLannister: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/jaime-lannister-512x512.jpg",
  TyrionLannister: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/tyrion-lannister-512x512.jpg",
  Melisandre: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/melisandre-512x512.jpg",
  Missandei: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/missandei-512x512.jpg",
  JorahMormont: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/jorah-mormont-512x512.jpg",
  ThorosofMyr: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/thoros-of-myr-512x512.jpg",
  EllariaSand: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/ellaria-sand-512x512.jpg",
  NymSand: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/nymeria-sand-512x512.jpg",
  ObaraSand: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/obara-sand-512x512.jpg",
  TyeneSand: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/tyene-sand-512x512.jpg",
  DavosSeaworth: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/davos-seaworth-512x512.jpg",
  JonSnow: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/jon-snow-512x512.jpg",
  AryaStark: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/arya-stark-512x512.jpg",
  BranStark: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/bran-stark-512x512.jpg",
  SansaStark: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/sansa-stark-512x512.jpg",
  DaenerysTargaryen: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/daenerys-targaryen-512x512.jpg",
  DickonTarly: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/dickon-tarly-512x512.jpg",
  SamwellTarly: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/samwell-tarly-512x512.jpg",
  RandyllTarly: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/randyll-tarly-512x512.jpg",
  Tormund: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/tormund-512x512.jpg",
  OlennaTyrell: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s7/olenna-tyrell-512x512.jpg",
  Varys: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/maetser-varys-512x512.jpg",
  MaesterAemon: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/aemon-targaryen-512x512.jpg",
  LysaArryn: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/lysa-arryn-512x512.jpg",
  RobinArryn: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/robyn-arryn-512x512.jpg",
  JoffreyBaratheon: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/joffrey-512x512.jpg",
  MyrcellaBaratheon: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/myrcella-baratheon-512x512.jpg",
  RenlyBaratheon: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/renly-baratheon-512x512.jpg",
  RobertBaratheon: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/robert-baratheon-512x512.jpg",
  StannisBaratheon: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/stannis-512x512.jpg",
  TommenBaratheon: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/tommon-baratheon-512x512.jpg",
  RamsayBolton: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/ramsay-512x512.jpg",
  RooseBolton: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/roose-bolton-512x512.jpg",
  JoryCassel: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/jory-cassel-512x512.jpg",
  RodrikCassel: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/ser-rodrik-cassel-512x512.jpg",
  LadyCrane: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s6/lady-crane-512x512.jpg",
  KhalDrogo: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/khal-drogo-512x512.jpg",
  SyrioForel: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/syrio-forel-512x512.jpg",
  Gendry: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/gendry-512x512.jpg",
  Grenn: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/grenn-512x512.jpg",
  BalonGreyjoy: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/balon-greyjoy-512x512.jpg",
  YaraGreyjoy: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/yara-greyjoy-512x512.jpg",
  JaqenHghar: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/jaqen-hghar-512x512.jpg",
  HighPriestess: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s6/high-priestess-512x512.jpg",
  Hodor: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/hodor-512x512.jpg",
  AreoHotah: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/areo-hotah-512x512.jpg",
  Illyrio: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/magister-illyrio-160.jpg",
  Irri: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/irri-512x512.jpg",
  Izembaro: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/izembaro-512x512.jpg",
  RickardKarstark: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/karstark-512x512.jpg",
  LancelLannister: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/lancel-lannister-512x512.jpg",
  TywinLannister: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/tywin-lannister-512x512.jpg",
  MaesterLuwin: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/maester-luwin-512x512.jpg",
  Marillion: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/marillion-512x512.jpg",
  DoranMartell: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/doran-martell-512x512.jpg",
  OberynMartell: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/oberyn-512x512.jpg",
  TrystaneMartell: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/trystane-martell-512x512.jpg",
  MirriMazDuur: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/mirri-maz-duur-512x512.jpg",
  SeptaMordane: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/septa-mordane-512x512.jpg",
  JeorMormont: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/jeor-mormont-512x512.jpg",
  KhalMoro: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s6/khal-moro-512x512.jpg",
  DaarioNaharis: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/daario-naharis-512x512.jpg",
  Orell: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/orell-512x512.jpg",
  BrotherRay: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s6/brother-ray-512x512.jpg",
  ManceRayder: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/mance-rayder-512x512.jpg",
  Osha: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/osha-512x512.jpg",
  PodrickPayne: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/podrick-payne-512x512.jpg",
  GrandMaesterPycelle: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/maester-pycelle-512x512.jpg",
  Pyp: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/pyp-512x512.jpg",
  Qyburn: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/qyburn-512x512.jpg",
  Rattleshirt: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/rattleshirt-512x512.jpg",
  Ros: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/ros-512x512.jpg",
  BarristanSelmy: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/barristan-selmy-512x512.jpg",
  Shae: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/shae-512x512.jpg",
  JanosSlynt: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/janos-slynt-512x512.jpg",
  HighSparrow: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/high-sparrow-512x512.jpg",
  BenjenStark: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/benjen-stark-512x512.jpg",
  CatelynStark: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/catelyn-stark-512x512.jpg",
  EddardNed_Stark: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/eddard-ned-stark-512x512.jpg",
  RickonStark: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/rickon-stark-512x512.jpg",
  RobbStark: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/robert-stark-512x512.jpg",
  TalisaStark: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/talisa-stark-512x512.jpg",
  ViserysTargaryen: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/viserys-targaryen-512x512.jpg",
  AlliserThorne: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/allister-thorne-512x512.jpg",
  Bryndenthe_BlackfishTully: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/blackfish-tully-512x512.jpg",
  MargaeryTyrell: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/margarey-tyrell-512x512.jpg",
  Ygritte: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/ygritte-512x512.jpg"
}
