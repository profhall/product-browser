const sauteed_kale = "https://www.lifeisbutadish.com/wp-content/uploads/2019/06/Simple-Saut%C3%A9ed-Kale-2.jpg"
const sauteed_brussels = "https://www.simplyrecipes.com/wp-content/uploads/2009/11/brussels-sprouts-black-bean-garlic-sauce-vertical-a-1600.jpg"

const roasted_brussels = "https://www.fifteenspatulas.com/wp-content/uploads/2011/03/Roasted-Brussel-Sprouts-Fifteen-Spatulas-3-640x959.jpg"
const brown_rice = "https://mymontanakitchen.com/wp-content/uploads/2019/05/instant-pot-brown-rice-10-720x720.jpg"
const cornbread_muffins = "https://www.recipetineats.com/wp-content/uploads/2014/10/Cornbread-Muffins_9.jpg"
const roasted_sweet_potatoes = "https://spicysouthernkitchen.com/wp-content/uploads/roasted-sweet-potatoes-11.jpg"

const mixed_veggies = "https://dailyezcooking.files.wordpress.com/2014/02/img_3264_e589afe69cac.jpg";

export const meals = [

    {
        "name": "BBQ Black Eyed Pea Collard Rolls",
        "available": true,
        "side": {
            1:{
                "name":"Brown Rice",
                "pic":brown_rice
            },
            2:{
                "name":"Cornbread Muffins",
                "pic":cornbread_muffins
            }
        },
        "description": "Black Eyed Pea Collard Green Rolls are hearty, healthy, tangy and plant-based! Comes with brown rice and sauteed greens",
        "ingredients": ["Collard Greens", "Crimini Mushrooms",  "Black Eyed Peas", "Bourbon BBQ Sauce", "Bell Pepper"],
        "type":"main",
        "photo": "https://vanillaandbean.com/wp-content/uploads/2014/04/BBQBlackeyedpeaCollards-5.jpg",
        "source": "https://vanillaandbean.com/bbq-black-eye-pea-collard-rolls/",
        "nutrition":{
            "Calories":"70kcal",
            "Carbohydrates": "12g",
            "Protein": "5g",
            "Fat":"1g",
            "Saturated Fat": "1g",
            "Potassium": "394mg",
            "Fiber": "3g",
            "Sugar": "3g",
            "Vitamin A": "132iu",
            "Vitamin C": "1mg",
            "Calcium": "27mg",
            "Iron": "1mg"
        }
    },
    {
        "name": "Vegan Gumbo",
        "available": true,
        "side": {
            1:{
                "name":"Brown Rice",
                "pic":brown_rice
            },
            2:{
                "name":"Cornbread Muffins",
                "pic":cornbread_muffins
            }
        },
        "description": "This vegan gumbo with a mix of beans, mushrooms and okra is hearty, savory, filling and warming. Comes with brown rice & cornbread muffin",
        "ingredients": ["Onion", "Green Pepper", "Celery", "Garlic", "Okra", "Tomatoes",  "Chickpeas", "Lentils", "Brown Rice"],
        "type":"main",
        "photo": "https://www.cilantroandcitronella.com/wp-content/uploads/2017/01/vegan-gumbo-image-1.jpg",
        "source": "https://www.cilantroandcitronella.com/vegan-gumbo/",
        "nutrition":{
            "Calories":"782kcal",
            "Carbohydrates": "127g",
            "Protein": "38g",
            "Fat":"19g",
            "Saturated Fat": "3g",
            "Unsaturated Fat": "14g",
            "Potassium": "394mg",
            "Fiber": "32g",
            "Sugar": "32g",
            "Vitamin A": null,
            "Vitamin C": null,
            "Calcium": null,
            "Iron": null
        }
    },
    {
        "name": "BBQ Jerked Jackfruit Caribbean Quinoa Bowl",
        "available": true,
        "side": {
            1:{
                "name":"Fried Plantains",
                "pic":null
            },
            2:{
                "name":"Sauteed Greens",
                "pic":sauteed_kale
            }
        },
        "description": "A tasty bowl combining bbq jerked jackfruit, quinoa and red beans cooked in coconut milk. We use spices and herbs to create a Caribbean taste.",
        "photo": "https://tryveg.com/wp-content/uploads/2018/07/IMG_20180613_150406_086-1024x1024.jpg",
        "type": "main",
        "ingredients": ["scallion","onion","coconut milk", "red beans", "jackfruit", "plantains", "garlic", "spices & herbs"],
        "nutrition":{
            "Calories":"",
            "Carbohydrates": "",
            "Protein": "",
            "Fat":"",
            "Saturated Fat": "",
            "Potassium": "",
            "Fiber": "",
            "Sugar": "",
            "Vitamin A": "",
            "Vitamin C": "",
            "Calcium": "",
            "Iron": ""
        }
    },
    {
        "name": "Vegan Pot Pie with Cornbread Crust",
        "available": true,
        "side": {
            1:{
                "name":"Roasted Sweet Potatoes",
                "pic":roasted_sweet_potatoes
            },
            2:{
                "name":"Sauteed Brussel Sprouts",
                "pic":sauteed_brussels
            }
        },
        "description": "This cozy vegan pot pie is made with tender veggies simmered in savory herbed sauce and baked up under a cornbread crust. Comes with roasted sweet potatoes & sauteed brussel sprouts",
        "photo": "https://thefitchen.com/wp-content/uploads/2016/09/Vegan-Pot-Pies-with-COrnbread-Crust-4.jpg",
        "sources": ["https://www.connoisseurusveg.com/vegan-chicken-pot-pie/","https://thefitchen.com/vegan-cornbread-pot-pies/"],
        "type": "main",
        "ingredients": [" Cornbread","Garlic","Mixed Vegetables(peas, carrots, green beans)", "chickpeas", "Spices & Herbs"],
        "nutrition":{
            "Calories":"296",
            "Carbohydrates": "32.4g",
            "Protein": "8.3g",
            "Fat":"12.6g",
            "Saturated Fat": "7.2g",
            "Potassium": "",
            "Fiber": "6.5g",
            "Sugar": "0.3g",
            "Vitamin A": "",
            "Vitamin C": "",
            "Calcium": "",
            "Iron": ""
        }
    },
    {
        "name": "Glazed Orange Cauliflower \"Chicken\"",
        "available": true,
        "side": {
            1:{
                "name":"Brown Rice",
                "pic":brown_rice
            },
            2:{
                "name":"Mixed Veggies",
                "pic":mixed_veggies
            }
        },
        "description": "Comes with brown jasmine rice and mixed veggies w/ garlic sauce",
        "ingredients": ["Cauliflower", "Coconut", "Orange Juice", "Maple Syrup"],
        "type":"main",
        "source": "https://www.thefoodietakesflight.com/post/2018/12/03/glazed-orange-cauliflower-chicken",
        "photo": "https://i.redd.it/4cqhdbzjgei31.jpg",
        "nutrition":{
            "Calories":"",
            "Carbohydrates": "",
            "Protein": "",
            "Fat":"",
            "Saturated Fat": "",
            "Potassium": "",
            "Fiber": "",
            "Sugar": "",
            "Vitamin A": "",
            "Vitamin C": "",
            "Calcium": "",
            "Iron": ""
        }
    },
    {
        "name": "Thai Red Curry with Vegetables",
        "available": true,
        "side": {
            1:{
                "name":"Brown Rice",
                "pic":brown_rice
            },
            2:{
                "name":"Sauteed Brussels",
                "pic":sauteed_brussels
            }
        },
        "description": "Comes with brown jasmine rice and sauteed brussels",
        "ingredients": [],
        "type":"main",
        "photo": "https://cookieandkate.com/images/2015/10/thai-red-curry-recipe-with-vegetables-1-1.jpg",
        "nutrition":{
            "Calories":"340",
            "Carbohydrates": "56.3g",
            "Protein": "8.3g",
            "Fat":"11.3g",
            "Saturated Fat": "8g",
            "Potassium": "",
            "Fiber": "5.6g",
            "Sugar": "9.3g",
            "Vitamin A": "48%",
            "Vitamin C": "148%",
            "Calcium": "",
            "Vitamin B6":"15%",
            "Iron": "15%"
        }
    },
    {
        "name": "Veggie Fajitas",
        "available": true,
        "side": {
            1:{
                "name":"Green Rice",
                "pic":"https://minimalistbaker.com/wp-content/uploads/2019/06/AMAZING-Green-Rice-infused-with-peppers-and-herbs-7-ingredients-VIBRANT-flavor-perfect-for-Mexican-night-and-beyond-glutenfree-plantbased-rice-recipe-minimalistbaker_-16.jpg",
                "ingredients":""
            },
            2:{
                "name":"Mexican Black Beans",
                "pic":"https://i2.wp.com/belleofthekitchen.com/wp-content/uploads/2018/06/mexican-black-beans2.jpg?resize=680%2C1020&ssl=1",
            }
        },
        "description": "A veggie medley sauteed with garlic & mexican spices delivering a delicious mouth watering meal. Served with green rice (cilantro lime rice) and mexican black beans, and guacamole. ",
        "photo": "https://karylskulinarykrusade.com/wp-content/uploads/2018/07/Grilled-Vegetable-Fajitas-Feature.jpg",
        "type": "main",
        "ingredients": ["Red & Green Bell Pepper", "Red Onion", "Garlic", "Mexican Spices & Herbs", "Tortillas", ],
        "nutrition":{
            "Calories":"",
            "Carbohydrates": "",
            "Protein": "",
            "Fat":"",
            "Saturated Fat": "",
            "Potassium": "",
            "Fiber": "",
            "Sugar": "",
            "Vitamin A": "",
            "Vitamin C": "",
            "Calcium": "",
            "Iron": ""
        }
    },
    {
        "name": "Lentil Spinach Burritos",
        "available": false,
        "side": {
            1:{
                "name":"Cajun Quinoa",
                "pic":null,
                "ingredients":""
            },
            2:{
                "name":"Sauteed Brussels Sprouts",
                "pic":null,
            }
        },
        "description": "A nutrient packed burrito with tons of flavor, served with sauteed brussel sprouts and cajun quinoa",
        "photo": "https://www.thegardengrazer.com/wp-content/uploads/2012/03/lentilspinach-burrito.webp",
        "type": "main",
        "ingredients": ["lentils", "tomatoes", "spinach", "onion", " quinoa", "garlic", "tortillas", "herbs & spices"],
        "nutrition":{
            "Calories":{
               "total": "450",
                "fat":"3%",
                "carbs": "67%",
                "protein":"30%",
            },
            "Carbohydrates": "78g",
            "Protein": "35g",
            "Fat":"16g",
            "Saturated Fat": "3g",
            "Potassium": "980mg",
            "Fiber": "30g",
            "Sugar": "7g",
            "Vitamin A": "2190IU",
            "Vitamin C": "21mg",
            "Calcium": "199mg",
            "Iron": "9.4mg"
        }

    },
    {
        "name": "Jackfruit Stir Fry",
        "available": true,
        "side": {
            1:{
                "name":"Sauteed Greens",
                "pic":sauteed_kale
            },
            2:{
                "name":"Roasted Brussels Sprouts",
                "pic":roasted_brussels,
            }
        },
        "description": "Accompanied by sauteed greens & roasted brussel sprouts, this asian inspired dish packs alot of flavor and nutrition.  ",
        "photo": "https://www.nestleprofessional.us/sites/g/files/gfb131/f/styles/recipe/public/media/young-jackfruit-stir-fry-maggi-nestle-professional-food-service-recipe-540x400.jpg?itok=36eTdMJb",
        "type": "main",
        "ingredients":["sweet potato", "brussel sprouts", "jalapenos", "young jackfruit","lime juice","green peas", "baby corn", "garlic", "herb & spices", "bell pepper"," onion", "grapeseed oil" ],
        "nutrition":{
            "Calories":"",
            "Carbohydrates": "",
            "Protein": "",
            "Fat":"",
            "Saturated Fat": "",
            "Potassium": "",
            "Fiber": "",
            "Sugar": "",
            "Vitamin A": "",
            "Vitamin C": "",
            "Calcium": "",
            "Iron": ""
        }
    },
    {
        "name": "Squash Casserole",
        "available": false,
        "side": {
            1:{
                "name":"Sesame Roasted Sweet Potatoes",
                "pic":null,
                "ingredients":""
            },
            2:{
                "name":"Sauteed Brussels Sprouts",
                "pic":null,
            }
        },
        "description": "Served with sauteed greens & roasted brussels spouts. ",
        "photo": "https://i0.wp.com/www.fromachefskitchen.com/wp-content/uploads/2019/07/Zucchini-Yellow-Squash-and-Quinoa-Casserole.jpg?w=600&ssl=1",
        "type": "main",
        "ingredients":["garlic", "zucchini","yellow squash", "green chiles", "quinoa", "vegan(soy-free) cheeses"  ],
        "nutrition":{
            "Calories":"",
            "Carbohydrates": "",
            "Protein": "",
            "Fat":"",
            "Saturated Fat": "",
            "Potassium": "",
            "Fiber": "",
            "Sugar": "",
            "Vitamin A": "",
            "Vitamin C": "",
            "Calcium": "",
            "Iron": ""
        }
    },
    {
        "name": "Spicy Caribbean Curry w/Jackfruit",
        "available": true,
        "sides": ["Brown Rice & Beans", "Sauteed Greens"],
        "description": "A Caribbean Classic prepared with jackfruit instead of traditional meat. This is served with brown rice and beans & sauteed cabbage. Comes with brown rice & beans, and sauteed greens" ,
        "photo": "https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_300/https://thatgirlcookshealthy.com/wp-content/uploads/2018/03/curried-jackfruit-Image-300x300.jpg",
        "type": "main",
        "ingredients":["young jackfruit", "sweet potato", "garlic", "ginger", "onion", "scallion", "herbs & spices", "tomato", "coconut milk", "coconut oil", "rice", "kidney beans", "kale", "red cabbage", "carrots" ],
        "nutrition":{
            "Calories":"",
            "Carbohydrates": "",
            "Protein": "",
            "Fat":"",
            "Saturated Fat": "",
            "Potassium": "",
            "Fiber": "",
            "Sugar": "",
            "Vitamin A": "",
            "Vitamin C": "",
            "Calcium": "",
            "Iron": ""
        }
    },
    {
        "name": "Carolina Style BBQ and Coleslaw",
        "available": true,
        "sides": ["Chickpea Baked BBQ Beans","Roasted Sweet Potatoes" ],
        "description": "A Carolina Classic! Served with chickpea baked bbq beans & roasted sweet potatoes ",
        "photo": "https://i.pinimg.com/originals/d7/c7/53/d7c753890cf30de32505bb4e8835afbf.jpg",
        "ingredients": ["young jackfruit", "chickpeas", "tomato sauce", "sweet potato", "bell pepper", "herbs & spices", "cabbage", "apple cider vinegar","mustard", "vegan mayo"],
        "type": "main",
        "nutrition":{
            "Calories":"",
            "Carbohydrates": "",
            "Protein": "",
            "Fat":"",
            "Saturated Fat": "",
            "Potassium": "",
            "Fiber": "",
            "Sugar": "",
            "Vitamin A": "",
            "Vitamin C": "",
            "Calcium": "",
            "Iron": ""
        }
    },
    {
        "name": "Spicy Sweet Potato and Green Rice Burrito Bowls" ,
        "available": true,
        "description": "Healthy burrito bowls made with roasted sweet potato, green rice and black beans! This delicious, vegan dinner reheats well for lunch.",
        "type":"main",
        "ingredients": [] ,
        "photo": "https://cookieandkate.com/images/2015/01/sweet-potato-green-rice-burrito-bowls-recipe-1.jpg",
        "nutrition":{
            "Calories":"",
            "Carbohydrates": "",
            "Protein": "",
            "Fat":"",
            "Saturated Fat": "",
            "Potassium": "",
            "Fiber": "",
            "Sugar": "",
            "Vitamin A": "",
            "Vitamin C": "",
            "Calcium": "",
            "Iron": ""
        }
    },
    {
        "name": "Lemon Herb Couscous Salad",
        "available": true,
        "description": "A light and healthy couscous salad with a simple lemon vinaigrette, cucumber and herbs",
        "type":"salad",
        "ingredients":["pearl couscous", "olive oil", "spices", "dijon mustard", "agave syrup", "lemon juice", "cucumber", "tomato", "fresh herbs", "walnuts" ,"raisins"],
        "url": "https://www.bbcgoodfood.com/recipes/2303651/sweet-potato-salad",
        "photo": "https://www.inspiredtaste.net/wp-content/uploads/2017/12/Easy-Couscous-Salad-Recipe-2-1200.jpg",
        "nutrition":{
            "Calories":"",
            "Carbohydrates": "",
            "Protein": "",
            "Fat":"",
            "Saturated Fat": "",
            "Potassium": "",
            "Fiber": "",
            "Sugar": "",
            "Vitamin A": "",
            "Vitamin C": "",
            "Calcium": "",
            "Iron": ""
        }
    },
    {
        "name": "Kale Apple Salad",
        "available": true,
        "description": "This Kale Salad recipe is loaded with crisp apples, crunchy pecans, and dried cranberries. Tossed in a simple honey-lemon dressing that coats every bite!",
        "ingredients": ["pecans", "kale", "dried cranberries", "lemon juice", "honey", "apples", "onion", "herbs & spices"],
        "type":"salad",
        "photo": "https://natashaskitchen.com/wp-content/uploads/2016/11/Kale-Salad-Recipe-with-Honey-Lemon-Dressing-5.jpg",
        "nutrition":{
            "Calories":"",
            "Carbohydrates": "",
            "Protein": "",
            "Fat":"",
            "Saturated Fat": "",
            "Potassium": "",
            "Fiber": "",
            "Sugar": "",
            "Vitamin A": "",
            "Vitamin C": "",
            "Calcium": "",
            "Iron": ""
        }
    },
    {
        "name": "Delicious Green Detox Salad" ,
        "available": true,
        "description": "The base of this salad is made up of Tuscan kale, broccoli, purple cabbage, cilantro, parsley, grapefruit, and avocado. It’s a simple mixed salad that gets dressed up in a delicious lemony tahini dressing. ",
        "type":"salad",
        "ingredients": [],
        "photo": "https://www.halfbakedharvest.com/wp-content/uploads/2016/01/The-Mean-Green-Detox-Salad-1.jpg",
        "nutrition":{
            "Calories":"",
            "Carbohydrates": "",
            "Protein": "",
            "Fat":"",
            "Saturated Fat": "",
            "Potassium": "",
            "Fiber": "",
            "Sugar": "",
            "Vitamin A": "",
            "Vitamin C": "",
            "Calcium": "",
            "Iron": ""
        }
    },
    {
        "name": "Rainbow Power Greens Salad with Black Eyed Peas",
        "available": true,
        "description": "A healthy gluten free power greens salad packed with lucky black eyed peas and super nutrients.  A great way to start off the new year and get back on track with clean eating.",
        "type":"salad",
        "ingredients": ["Quinoa", "Carrots", "Shallots", "Cabbage", "Kale", "Collard Greens", "Black Eyed Peas", "Garlic"],
        "source": "https://www.cottercrunch.com/rainbow-power-greens-salad-black-eyed-peas-vegan-gluten-free/",
        "photo": "https://www.cottercrunch.com/wp-content/uploads/2015/12/rainbow-power-greens-salad-with-black-eyed-peas2.jpg",
        "nutrition":{
            "Calories":"",
            "Carbohydrates": "",
            "Protein": "",
            "Fat":"",
            "Saturated Fat": "",
            "Potassium": "",
            "Fiber": "",
            "Sugar": "",
            "Vitamin A": "",
            "Vitamin C": "",
            "Calcium": "",
            "Iron": ""
        }
    }
];

