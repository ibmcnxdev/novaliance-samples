let BlogJS = new __cBill_waitForDojo('BlogJS'); 
BlogJS.do(function () { 
	
		/* Recherche de la balise */    
		console.debug(dojo.query(".inlinelist"));
		var n;
		for (n=0; n <= dojo.query(".inlinelist").length; n++) {
		  dojo.place("<div class='lotusActionBar lotusBtnContainer aria_toolbar' role='toolbar' style='float:none' aria-label='Actions de blogue'><span class='lotusBtn lotusLeft'><a href='https://apps.na.collabserv.com/blogs/a080f064-36ea-4105-8121-7a6a78acef94/entry/Inklusif_septieme_partie?lang=fr_fr' title='Entrée précédente' hastooltip='dijit_Tooltip_3711'>Entrée précédente</a></span><span class='lotusBtn lotusLeft'><a href='/blogs/a080f064-36ea-4105-8121-7a6a78acef94?maxresults=25&amp;lang=fr_fr'>Page principale</a></span><span class='lotusBtn lotusLeft'><a>Entrée suivante</a></span></div>", dojo.query(".inlinelist")[n],"replace");
		}

	}
	  
)
