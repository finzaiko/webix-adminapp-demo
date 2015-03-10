define([
	"views/modules/product_search",
	"views/modules/editor",

	"views/modules/product_upload",
	"views/modules/product_meta"
], function(search,editor,upload,meta){

var mainView = {};


var layout = {
	type: "space",
	rows:[
		{
        type: "wide",
				cols:[
					search,
					{
						gravity: 2.2,
            type: "line",
            borderless: true,
            css: "webix_layout_shadowed",
						rows:[
							{ rows: [{
                  view: "tabbar", multiview: true, optionWidth: 100,
                  options:[
                    {id: "mainView", value: "Main", width: 200},
                    {id: "imagesView", value: "Images"},
                    {id: "metaView", value: "Meta"}
                  ]
                }]
							},
							{
								cells:[
									editor,
									upload,
									meta
								]
							},
							{

								view: "form",
								css: "highlighted_header header6",
								paddingX:5,
								paddingY:5,
								height:40,

								cols:[
									{ view: "button", css: "webix_button_primary webix_button_raised", type: "form", icon: "plus", label: "Save", width: 90},
									{ view: "button", css: "button2", icon: "angle-left", label: "Reset", width: 90},

									{},
									{ view: "button", css: "webix_button_danger button0", icon: "times", label: "Delete", width: 90}
								]

							}
						]



			}
		]}


	]

};


return {
	$ui:layout,
	$oninit:function(){

		$$("mainView").bind($$("list"));
	}
};

});