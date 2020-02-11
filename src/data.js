const sauteed_kale = "https://10ydgx69ny82dxci5228c171-wpengine.netdna-ssl.com/wp-content/uploads/2014/10/IMG_2711-640x400.jpg"
const sauteed_brussels = "https://www.simplyrecipes.com/wp-content/uploads/2009/11/brussels-sprouts-black-bean-garlic-sauce-vertical-a-1600.jpg"
const roasted_brussels = "https://www.fifteenspatulas.com/wp-content/uploads/2011/03/Roasted-Brussel-Sprouts-Fifteen-Spatulas-3-640x959.jpg"
const brown_rice = "https://mymontanakitchen.com/wp-content/uploads/2019/05/instant-pot-brown-rice-10-720x720.jpg"
const brown_rice_beans = "https://www.gatheranddine.com/wp-content/uploads/2014/04/Chorizo-Rice-2.jpg"
const cornbread_muffins = "https://www.recipetineats.com/wp-content/uploads/2014/10/Cornbread-Muffins_9.jpg"
const roasted_sweet_potatoes = "https://spicysouthernkitchen.com/wp-content/uploads/roasted-sweet-potatoes-11.jpg"
const mixed_veggies = "http://chefyan.ca/files/2012/01/Broccoli-in-Garlic-Sauce-Chinese-Food2.jpg";
const quinoa = "https://dinnerthendessert.com/wp-content/uploads/2019/04/How-to-Cook-Quinoa-3.jpg";
const plantains = "https://i.pinimg.com/originals/56/a9/d3/56a9d3c141c356c25ea68b3e727dde39.jpg";
const coleslaw = "https://i0.wp.com/passtheplants.com/wp-content/uploads/2017/07/perfect-vegan-coleslaw-in-bowl.jpg?resize=680%2C1020&ssl=1";
const chickpea_baked = "http://www.picklesnhoney.com/wp-content/uploads/2012/01/MG_3447.jpg";
const sauteed_broccoli = "https://contenthandler.azureedge.net/recp/50/2000/0/3351.jpg";
const mashed_cauliflower = "https://media.chefdehome.com/740/0/0/cauliflower/mashed-cauliflower-recipe.jpg";
const cauliflower_rice = "https://www.veganricha.com/wp-content/uploads/2018/02/Cauliflower-Fried-Rice-with-Tofu-Eggplant-in-Soy-Lime-Sauce-veganricha-7293.CR2_.HR_.jpg";
const cauliflower_green_rice = "https://minimalistbaker.com/wp-content/uploads/2019/06/DELICIOUS-Cauliflower-Green-Rice-infused-with-lime-herbs-and-peppers-8-ingredients-FRESH-flavor-perfect-for-Mexican-night-glutenfree-plantbased-cauliflowerrice-recipe-minimalistbaker_-9-768x1152.jpg";
const fried_okra = "https://images.abeautifulmess.com/uploads/2018/11/air-fried-okra.jpg"
const black_beans = "https://i2.wp.com/belleofthekitchen.com/wp-content/uploads/2018/06/mexican-black-beans2.jpg?resize=680%2C1020&ssl=1"

export const meals = [
    {
        "name": "Jackfruit Crab Cakes with Lemon Dill Sauce",
        "available": true,
        "side": {
            1: {
                "name": "sweet potatoes",
                "pic": roasted_sweet_potatoes
            },
            2: {
                "name": "Sauteed Greens",
                "pic": sauteed_kale
            }
        },
        "description": "Our version of a classic seafood dish made with the versatile Jackfruit. These cakes come with Sauteed veggies and roasted sweet potato salad. ",
        "ingredients": [],
        "photo": "https://dizzybusyandhungry.com/wp-content/uploads/2018/09/crab-cakes-3862-2.jpg",
        "type": "main"
    },
    {
        "name": "Homemade Vegan Chili",
        "available": false,
        "description": "This a great meal for the cold months made with simple ingredients  like onion, carrot, tomatoes, celery and garlic. Served with cauliflower rice and air fried okra.",
        "ingredients": [],
        "side": {
            1: {
                "name": "Okra",
                "pic": fried_okra
            },
            2: {
                "name": "Cauliflower Rice",
                "pic": cauliflower_rice,
            }
        },
        "type": "main",
        "photo": "https://cookieandkate.com/images/2015/11/vegetarian-chili-recipe-6.jpg",
        "nutrition": {
            "Calories": "",
            "Carbohydrates": "",
            "Protein": "",
            "Fat": "",
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
        "name": "Yellow Curry with Chikpeas & Roasted Veggies",
        "available": false,
        "description": "",
        "ingredients": [],
        "side": {
            1: {
                "name": "Basmati Rice",
                "pic": brown_rice
            },
            2: {
                "name": "Sauteed Kale",
                "pic": sauteed_kale,
            }
        },
        "type": "main",
        "photo": "https://i2.wp.com/www.yummymummykitchen.com/wp-content/uploads/2018/03/4b3d6-vegan-chickpea-curry.jpg",
        "nutrition": {
            "Calories": "",
            "Carbohydrates": "",
            "Protein": "",
            "Fat": "",
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
        "name": "BBQ Black Eyed Pea Collard Rolls",
        "available": true,
        "side": {
            1: {
                "name": "Brown Rice",
                "pic": brown_rice
            },
            2: {
                "name": "Cornbread Muffins",
                "pic": cornbread_muffins
            }
        },
        "description": "Black Eyed Pea Collard Green Rolls are hearty, healthy, tangy and plant-based! Comes with brown rice and sauteed greens",
        "ingredients": ["Collard Greens", "Crimini Mushrooms", "Black Eyed Peas", "Bourbon BBQ Sauce", "Bell Pepper"],
        "type": "main",
        "photo": "https://vanillaandbean.com/wp-content/uploads/2014/04/BBQBlackeyedpeaCollards-5.jpg",
        "source": "https://vanillaandbean.com/bbq-black-eye-pea-collard-rolls/",
        "nutrition": {
            "Calories": "70kcal",
            "Carbohydrates": "12g",
            "Protein": "5g",
            "Fat": "1g",
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
            1: {
                "name": "Cauliflower Rice",
                "pic": cauliflower_rice
            },
            2: {
                "name": "Cornbread Muffins",
                "pic": cornbread_muffins
            }
        },
        "description": "This vegan gumbo with a mix of beans, mushrooms and okra is hearty, savory, filling and warming. Comes with yummy cauliflower rice & cornbread muffin",
        "ingredients": ["Onion", "Green Pepper", "Celery", "Garlic", "Okra", "Tomatoes", "Chickpeas", "Lentils", "Brown Rice"],
        "type": "main",
        "photo": "https://www.cilantroandcitronella.com/wp-content/uploads/2017/01/vegan-gumbo-image-1.jpg",
        "source": "https://www.cilantroandcitronella.com/vegan-gumbo/",
        "nutrition": {
            "Calories": "782kcal",
            "Carbohydrates": "127g",
            "Protein": "38g",
            "Fat": "19g",
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
        "name": "Vegan Lasagna",
        "available": true,
        "side": {
            1: {
                "name": "Brocolli",
                "pic": sauteed_broccoli
            },
            2: {
                "name": "Cauliflower Mashed 'Potatoes'",
                "pic": mashed_cauliflower
            }
        },
        "description": "Incredibly flavorful, hearty vegan lasagna! Tender lasagna noodles are layered with Macadamia Nut Ricotta and Marinara Sauce. Comes with mashed cauliflower 'potatoes' & sauteed broccoli." ,
        "ingredients": [],
        "instructions":[],
        "type": "main",
        "photo": "https://www.noracooks.com/wp-content/uploads/2018/04/IMG_8639.jpg",
        "source": "https://www.noracooks.com/best-vegan-lasagna/",
        "source2": "https://minimalistbaker.com/easy-vegan-lasagna/",
        "nutrition": {
            "Calories": "",
            "Carbohydrates": "",
            "Protein": "",
            "Fat": "",
            "Saturated Fat": "",
            "Unsaturated Fat": "",
            "Potassium": "",
            "Fiber": "",
            "Sugar": "",
            "Vitamin A": null,
            "Vitamin C": null,
            "Calcium": null,
            "Iron": null
        }
    },
    {
        "name": "BBQ Jerked Jackfruit Caribbean Quinoa Bowl",
        "available": false,
        "side": {
            1: {
                "name": "Fried Plantains",
                "pic": plantains
            },
            2: {
                "name": "Sauteed Greens",
                "pic": sauteed_kale
            }
        },
        "description": "A tasty bowl combining bbq jerked jackfruit, quinoa and red beans cooked in coconut milk. We use spices and herbs to create a Caribbean taste.",
        "photo": "https://tryveg.com/wp-content/uploads/2018/07/IMG_20180613_150406_086-1024x1024.jpg",
        "type": "main",
        "ingredients": ["scallion", "onion", "coconut milk", "red beans", "jackfruit", "plantains", "garlic", "spices & herbs"],
        "nutrition": {
            "Calories": "",
            "Carbohydrates": "",
            "Protein": "",
            "Fat": "",
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
        "name": "Vegan Pot Pie",
        "available": false,
        "side": {
            1: {
                "name": "Roasted Sweet Potatoes",
                "pic": roasted_sweet_potatoes
            },
            2: {
                "name": "Sauteed Brussel Sprouts",
                "pic": sauteed_brussels
            }
        },
        "description": "This cozy vegan pot pie is made with tender veggies simmered in savory herbed sauce and baked up under a chickpea flour pie crust. Comes with roasted sweet potatoes & sauteed brussel sprouts",
        "photo": "https://frommybowl.com/wp-content/uploads/2019/02/Chickpea_Pot_Pie_Vegan_Grain_Free_FromMyBowl-6.jpg",
        "source": "https://frommybowl.com/vegan-chickpea-pot-pie/",
        "type": "main",
        "ingredients": [ "Garlic", "Mixed Vegetables(peas, carrots, green beans)", "chickpeas", "Spices & Herbs"],
        "nutrition": {
            "Calories": "296",
            "Carbohydrates": "32.4g",
            "Protein": "8.3g",
            "Fat": "12.6g",
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
        "name": "Glazed Orange Cauliflower 'Chicken'",
        "available": false,
        "side": {
            1: {
                "name": "cauliflower rice",
                "pic": cauliflower_rice
            },
            2: {
                "name": "Mixed Veggies",
                "pic": mixed_veggies
            }
        },
        "description": "Comes with cauliflower rice and mixed veggies w/ garlic sauce",
        "ingredients": ["Cauliflower", "Coconut", "Orange Juice", "Maple Syrup"],
        "type": "main",
        "source": "https://www.thefoodietakesflight.com/post/2018/12/03/glazed-orange-cauliflower-chicken",
        "photo": "https://i.redd.it/4cqhdbzjgei31.jpg",
        "nutrition": {
            "Calories": "",
            "Carbohydrates": "",
            "Protein": "",
            "Fat": "",
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
            1: {
                "name": "Brown Rice",
                "pic": brown_rice
            },
            2: {
                "name": "Sauteed Brussels",
                "pic": sauteed_brussels
            }
        },
        "description": "Comes with brown jasmine rice and sauteed brussels",
        "ingredients": [],
        "type": "main",
        "photo": "https://cookieandkate.com/images/2015/10/thai-red-curry-recipe-with-vegetables-1-1.jpg",
        "nutrition": {
            "Calories": "340",
            "Carbohydrates": "56.3g",
            "Protein": "8.3g",
            "Fat": "11.3g",
            "Saturated Fat": "8g",
            "Potassium": "",
            "Fiber": "5.6g",
            "Sugar": "9.3g",
            "Vitamin A": "48%",
            "Vitamin C": "148%",
            "Calcium": "",
            "Vitamin B6": "15%",
            "Iron": "15%"
        }
    },
    {
        "name": "Veggie Fajitas",
        "available": true,
        "side": {
            1: {
                "name": "Green Rice",
                "pic": cauliflower_green_rice,
                "ingredients": ""
            },
            2: {
                "name": "Mexican Black Beans",
                "pic": black_beans,
            }
        },
        "description": "A veggie medley sauteed with garlic & mexican spices delivering a delicious mouth watering meal. Served with cauliflower green rice (cilantro lime cauliflower rice) and mexican black beans, and guacamole. ",
        "photo": "https://karylskulinarykrusade.com/wp-content/uploads/2018/07/Grilled-Vegetable-Fajitas-Feature.jpg",
        "type": "main",
        "ingredients": ["Red & Green Bell Pepper", "Red Onion", "Garlic", "Mexican Spices & Herbs", "Tortillas", ],
        "nutrition": {
            "Calories": "",
            "Carbohydrates": "",
            "Protein": "",
            "Fat": "",
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
            1: {
                "name": "Cajun Quinoa",
                "pic": quinoa,
            },
            2: {
                "name": "Sauteed Brussels Sprouts",
                "pic": sauteed_brussels,
            }
        },
        "description": "A nutrient packed burrito with tons of flavor, served with sauteed brussel sprouts and cajun quinoa",
        "photo": "https://www.thegardengrazer.com/wp-content/uploads/2012/03/lentilspinach-burrito.webp",
        "type": "main",
        "ingredients": ["lentils", "tomatoes", "spinach", "onion", " quinoa", "garlic", "tortillas", "herbs & spices"],
        "nutrition": {
            "Calories": "450",
            "Carbohydrates": "78g",
            "Protein": "35g",
            "Fat": "16g",
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
        "name": "Teriyaki Jackfruit Stir Fry",
        "available": true,
        "side": {
            1: {
                "name": "Sauteed Greens",
                "pic": sauteed_kale
            },
            2: {
                "name": "Roasted Brussels Sprouts",
                "pic": roasted_brussels,
            }
        },
        "description": "Accompanied by sauteed greens & roasted brussel sprouts, this asian inspired dish packs alot of flavor and nutrition.  ",
        "photo": "https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2018/09/pulled-jackfruit-bowl-800x1200.jpg",
        "type": "main",
        "ingredients": ["sweet potato", "brussel sprouts", "jalapenos", "young jackfruit", "lime juice", "green peas", "baby corn", "garlic", "herb & spices", "bell pepper", " onion", "grapeseed oil"],
        "nutrition": {
            "Calories": "",
            "Carbohydrates": "",
            "Protein": "",
            "Fat": "",
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
            1: {
                "name": "Sesame Roasted Sweet Potatoes",
                "pic": roasted_sweet_potatoes,
            },
            2: {
                "name": "Sauteed Brussels Sprouts",
                "pic": sauteed_brussels,
            }
        },
        "description": "Served with sauteed greens & roasted brussels spouts. ",
        "photo": "https://i0.wp.com/www.fromachefskitchen.com/wp-content/uploads/2019/07/Zucchini-Yellow-Squash-and-Quinoa-Casserole.jpg?w=600&ssl=1",
        "type": "main",
        "ingredients": ["garlic", "zucchini", "yellow squash", "green chiles", "quinoa", "vegan(soy-free) cheeses"],
        "nutrition": {
            "Calories": "",
            "Carbohydrates": "",
            "Protein": "",
            "Fat": "",
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
        "name": "Tikka Masala",
        "available": true,
        "side": {
            1: {
                "name": "Sprouted Wheat Cornbread Muffin",
                "pic": cornbread_muffins
            },
            2: {
                "name": "Sauteed Brussels",
                "pic": sauteed_brussels,
            }
        },
        "description": "Made with coconut milk and comes with brown fluffy basmati rice & quinoa ",
        "type": "entree",
        "ingredients": [],
        "photo": "https://www.feastingathome.com/wp-content/uploads/2017/05/vegan-tikka-masala-with-cauliflower-100-3.jpg",
        "nutrition": {
            "Calories": "",
            "Carbohydrates": "",
            "Protein": "",
            "Fat": "",
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
        "name": "Spicy Caribbean Jackfruit Curry",
        "available": true,
        "side": {
            1: {
                "name": "Brown Rice & Beans",
                "pic": brown_rice_beans,
                "ingredients": ""
            },
            2: {
                "name": "Sauteed Greens",
                "pic": sauteed_kale,
            }
        },
        "sides": ["Brown Rice & Beans", "Sauteed Greens"],
        "description": "A Caribbean Classic prepared with jackfruit instead of traditional meat. This is served with brown rice and beans & sauteed cabbage. Comes with brown rice & beans, and sauteed greens",
        "photo": "https://noeggsorham.files.wordpress.com/2017/09/img_2469.jpg?w=2200",
        "source": "https://noeggsorham.com/2017/09/22/jamaican-jackfruit-curry-with-rice-peas/",
        "type": "main",
        "ingredients": ["young jackfruit", "sweet potato", "garlic", "ginger", "onion", "scallion", "herbs & spices", "tomato", "coconut milk", "coconut oil", "rice", "kidney beans", "kale", "red cabbage", "carrots"],
        "nutrition": {
            "Calories": "",
            "Carbohydrates": "",
            "Protein": "",
            "Fat": "",
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
        "name": "Carolina Style BBQ ",
        "available": true,
        "side": {
            1: {
                "name": "Coleslaw",
                "pic": coleslaw,
                "ingredients": ""
            },
            2: {
                "name": "Chickpea Baked Beans",
                "pic": chickpea_baked,
            }
        },
        "sides": ["Chickpea Baked BBQ Beans", "Roasted Sweet Potatoes"],
        "description": "A Carolina Classic! Served with chickpea baked bbq beans & coleslaw ",
        "photo": "https://i.pinimg.com/originals/d7/c7/53/d7c753890cf30de32505bb4e8835afbf.jpg",
        "ingredients": ["young jackfruit", "chickpeas", "tomato sauce", "sweet potato", "bell pepper", "herbs & spices", "cabbage", "apple cider vinegar", "mustard", "vegan mayo"],
        "type": "main",
        "nutrition": {
            "Calories": "",
            "Carbohydrates": "",
            "Protein": "",
            "Fat": "",
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
        "name": "Spicy Sweet Potato and Green Rice Burrito Bowls",
        "available": false,
        "description": "Healthy burrito bowls made with roasted sweet potato, green rice and black beans! This delicious, vegan dinner reheats well for lunch.",
        "type": "main",
        "sides": [],
        "photo": "https://cookieandkate.com/images/2015/01/sweet-potato-green-rice-burrito-bowls-recipe-1.jpg",
        "nutrition": {
            "Calories": "",
            "Carbohydrates": "",
            "Protein": "",
            "Fat": "",
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
        "name": "Vegan Chik'n Salad",
        "available": true,
        "description": "Chicken salad made with jackfruit",
        "photo": "https://i.pinimg.com/736x/c0/c0/45/c0c0455be08db07b3de2dbecfd02e8e6.jpg",
        "type": "salad",
        "ingredients": [],
        "nutrition": {
            "Calories": "",
            "Carbohydrates": "",
            "Protein": "",
            "Fat": "",
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
        "type": "salad",
        "ingredients": ["pearl couscous", "olive oil", "spices", "dijon mustard", "agave syrup", "lemon juice", "cucumber", "tomato", "fresh herbs", "walnuts", "raisins"],
        "url": "https://www.bbcgoodfood.com/recipes/2303651/sweet-potato-salad",
        "photo": "https://www.inspiredtaste.net/wp-content/uploads/2017/12/Easy-Couscous-Salad-Recipe-2-1200.jpg",
        "nutrition": {
            "Calories": "",
            "Carbohydrates": "",
            "Protein": "",
            "Fat": "",
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
        "type": "salad",
        "photo": "https://natashaskitchen.com/wp-content/uploads/2016/11/Kale-Salad-Recipe-with-Honey-Lemon-Dressing-5.jpg",
        "nutrition": {
            "Calories": "",
            "Carbohydrates": "",
            "Protein": "",
            "Fat": "",
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
        "name": "Delicious Green Detox Salad",
        "available": true,
        "description": "The base of this salad is made up of Tuscan kale, broccoli, purple cabbage, cilantro, parsley, grapefruit, and avocado. It’s a simple mixed salad that gets dressed up in a delicious lemony tahini dressing. ",
        "type": "salad",
        "ingredients": [],
        "photo": "https://www.halfbakedharvest.com/wp-content/uploads/2016/01/The-Mean-Green-Detox-Salad-1.jpg",
        "nutrition": {
            "Calories": "",
            "Carbohydrates": "",
            "Protein": "",
            "Fat": "",
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
        "name": "Rainbow Greens Salad with Black Eyed Peas",
        "available": false,
        "description": "A healthy gluten free power greens salad packed with lucky black eyed peas and super nutrients.  A great way to start off the new year and get back on track with clean eating.",
        "type": "salad",
        "ingredients": ["Quinoa", "Carrots", "Shallots", "Cabbage", "Kale", "Collard Greens", "Black Eyed Peas", "Garlic"],
        "source": "https://www.cottercrunch.com/rainbow-power-greens-salad-black-eyed-peas-vegan-gluten-free/",
        "photo": "https://www.cottercrunch.com/wp-content/uploads/2015/12/rainbow-power-greens-salad-with-black-eyed-peas2.jpg",
        "nutrition": {
            "Calories": "",
            "Carbohydrates": "",
            "Protein": "",
            "Fat": "",
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
];