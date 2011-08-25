var LOL = {};

LOL.dictionary = {
	'this'		 : 'thiz',
	'what'     : ['wut', 'whut'],   
	'you'   	 : ['yu', 'yous', 'yoo', 'u'],
	'cture'    : 'kshur',
	'unless'   : 'unles',
	'the'  		 : 'teh',            
	'more'     : 'moar',
	'my'       : ['muh', 'mah'],    
	'are'      : ['r', 'is', 'ar'],
	'eese'     : 'eez',            
	'ph'       : 'f',
	'as'		   : 'az',             
	'seriously': 'srsly',
	'er'  		 : 'r',              
	'sion'     : 'shun',
	'just'     : 'jus',            
	'ose'  		 : 'oze',
	'eady'     : 'eddy',           
	'ome'     : 'um',
	'of'   		 : ['of', 'ov', 'of'],   
	'uestion'  : 'wesjun',
	'want'  	 : 'waants',
	'ead'		   : 'edd',
	'ucke'     : ['ukki', 'ukke'],  
	'sion'     : 'shun',
	'eak'      : 'ekk',            
	'age'      : 'uj',
	'like'     : ['likes', 'liek'], 
	'love'     : ['loves', 'lub', 'lubs', 'luv'],
	'is' 			 : ['ar teh','ar'],  
	'nd'   		 : 'n',
	'who'      : 'hoo',            
	'ese'  		 : 'eez',            
	'outh'     : 'owf',
	'scio'     : 'shu',            
	'esque'    : 'esk',
	'ture'     : 'chur',           
	'too'			 : ['to', '2'],
	'tious'    : 'shus',           
	'sure'	   : 'shur',
	'tty'  		 : 'tteh',           
	'were'     : 'was',
	'ok'   		 : ['k', 'kay'],   
	'ym'       : 'im',             
	'thy'   	 : 'fee',
	'ly' 			 : 'li',             
	'que'		   : 'kwe',
	'oth'      : 'udd',            
	'ease'     : 'eez',
	'ing'  		 : ['in', 'ins', 'ng', 'ing'],
	'have'   	 : ['has', 'hav', 'haz a'],
	'your'     : ['yur', 'ur', 'yore', 'yoar'],
	'ove' 		 : ['oov', 'ove', 'uuv', 'uv', 'oove'],
	'for'      : ['for', '4', 'fr', 'fur', 'for', 'foar'],
	'thank'    : ['fank', 'tank', 'thx', 'thnx',],
	'good'     : ['gud', 'goed', 'guud', 'gude', 'gewd'],
	'really'   : ['rly', 'rily', 'rilly', 'rilley'],
	'oh really': 'orly',
	'world'    : ['wurrld', 'whirld', 'wurld', 'wrld'],
  "i'm"			 : 'im',
	'ight'   	 : 'ite',
	'tion' 		 : 'shun',
	"you're"   : ['yore', 'yr'],
	'i can have' : 'i can has',
	"hello|hi|hey|howdy|yo": "oh hai",
	'god|allah|buddah|diety' : 'ceiling cat',
	"cat|kitty|kitten": 'kitteh'
};
LOL.dictLen = LOL.dictionary.length;

LOL.translate = function(str){
	var orig = str.toLowerCase();
	var dict = LOL.dictionary;
	for (key in dict){
		var re = new RegExp(key, "g");
		var replace = dict[key];
		if(typeof replace == 'object'){
			// pick a random one
			var i = Math.floor(Math.random() * replace.length);
			replace = replace[i];
		}
		orig = orig.replace(re, replace);
	}
	return orig.toUpperCase();
}