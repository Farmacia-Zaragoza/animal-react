// [DOCHANGED_ES6]
// ==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--
// Node JS - Links Html Class  [V.0.0.2]  (2018-08-06)
// Brqx Group - Agile Farmacia Zaragoza Methodology - Browser [ES6]
//-------------------------------------------------------------------------------------
// Flat Structure Links
//-------------------------------------------------------------------------------------
//L[01]  <link rel="icon" type="image/svg" href="img/favicon/animals_icon_edu_2017.svg">
//L[02]  <link rel="apple-touch-icon" href="img/favicon/animals_icon_edu_2017.svg">
//L[03]  <link rel="shortcut icon" href="img/favicon/animals_icon_edu_2017.png" type="image/png">
// CSS
//L[07]  /link rel="preload" href="https://code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.min.css" as="style" onload="this.rel='stylesheet'">
//L[07]  <link rel="preload" href="fassets/libs/bootstrap4/css/bootstrap.min.css" as="style" onload="this.rel='stylesheet'">
//L[07]  <link rel="preload" href="assets/css/style_dynamic_dev.css" as="style" onload="this.rel='stylesheet'">
//L[07]  <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/flexslider/2.6.4/flexslider.min.css" as="style" onload="this.rel='stylesheet'"/>

// DEFER SCRIPT
//S[01] <script defer src="https://use.fontawesome.com/releases/v5.0.1/js/all.js"></script>

// ------------------------------------------------------------------------------------
//* LINK *
// ==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--
// Class: lnk01_link_animals
// ------------------------------------------------------------------------------------
// Methods:
// ------------------------------------------------------------------------------------
// - build_data  	 : Build html final code for object
// ==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--

var 	cons 							= 	require(	"/brqx/base/rcode/ea6/com/libs/general/constants.es6"								)

const 	{ getset } 						= 	require(	cons.JS_BASE + 'com/objects/html/getset.es6'										),		
		{ lnk02_css_link_animals }			= 	require(	cons.JS_BASE + 'spc/theme/animals/deep_html/styles/lnk02_css_link_animals.es6'				),
		{ lnk03_css_minimized_animals }		= 	require(	cons.JS_BASE + 'spc/theme/animals/deep_html/styles/lnk03_css_minimized_animals.es6'			),
		{ lnk04_css_inline_animals }		= 	require(	cons.JS_BASE + 'spc/theme/animals/deep_html/styles/lnk04_css_inline_animals.es6'			),
		{ lnk05_css_inline_animals }		= 	require(	cons.JS_BASE + 'spc/theme/animals/deep_html/styles/lnk05_css_inline_multiple_animals.es6'	),
		{ html_style } 					= 	require(	cons.JS_BASE + 'com/objects/html/html_style.es6'									);		

class lnk01_link_animals extends getset  {
 
    constructor (     thm										)
    {   

        super()															

		this.n							=	'lnk01_link_animals::'					

		this.thm						=	thm								

		// External object
		this.script_to_load				=	''
		this.link_to_load				=	''

		// tag object
     	this.linktag					= 	''								 
	
		this.link_favicon				=	new html_style('link') 		
		this.link_icon					=	new html_style('link') 		
		this.link_apple					=	new html_style('link') 		
	
		this.build_data()												

    }

	//L[01]  <link rel="icon" type="image/svg" href="img/favicon/animals_icon_edu_2017.svg">
    create_favicon()
    {
						
		this.link_favicon.rel					=	'icon'												
		this.link_favicon.type					=	'image/x-icon'											

		let	path_pmt							=	'dev/'

		// DomainBAr http://animals.vbrqx.com/ang/vx/favicon.ico

		this.link_favicon.href					=  	
				this.thm.u.http_domainbar +  path_pmt  + 'favicon.ico'				

		// this.p('DomainBAr ' +  this.link_favicon.href)

		this.link_favicon.pcreate()														
		
		this.code						+=	this.link_favicon.code						
	}		


    build_data()
    {
		
		this.create_favicon()											

		// Esta parte puede generarse de muchas formas
		// 1.como script
		// 2.como script minimizado
		// 3.inline

		if ( !this.thm.b.site_live )
		{
			// DEV
			if 			( this.thm.s.live_opt === 'script')
			{
				this.link_to_load	 	= 	new lnk02_css_link_animals(this.thm)
			}
			else if 	( this.thm.s.live_opt === 'minimized')
			{
				this.link_to_load 		= 	new lnk03_css_minimized_animals(this.thm)
				
			}
			else if 	( this.thm.s.live_opt === 'inline')
			{
				this.link_to_load 		= 	new lnk05_css_inline_animals(this.thm)
				
			}
			else if 	( this.thm.s.live_opt === 'inlinestyles')
			{
				this.link_to_load 		= 	new lnk05_css_inline_animals(this.thm)
				
			}
		}
		else
		{
			// LIVE
			// Esta parte esta pendiente p ues se unificaran css y js en un unico fichero
			if 			( this.thm.s.live_opt === 'script')
			{
				this.link_to_load 		= 	new lnk02_css_link_animals(this.thm)
			}
			else if 	( this.thm.s.live_opt === 'minimized')
			{
				this.link_to_load	 	= 	new lnk03_css_minimized_animals(this.thm)
			}
			else if 	( this.thm.s.live_opt === 'inline')
			{
				this.link_to_load	 	= 	new lnk05_css_inline_animals(this.thm)
			}
			else if 	( this.thm.s.live_opt === 'inline_and_save')
			{
				this.link_to_load	 	= 	new lnk05_css_inline_animals(this.thm)
			}
			else
				this.p('wrong_parameter ' + this.thm.s.live_opt )
		}

		this.code				+=	this.link_to_load.code	



		this.p('CHECKING_OPTIONS [' +  this.thm.s.env + '] ' + this.thm.s.live_opt)


		// ok link [18-05-05]
		// this.p('Farmalnk01_Code : >' + this.code ) 											
		// this.dd('Code >'  + this.code) 								

    }

}

exports.lnk01_link_animals = lnk01_link_animals
