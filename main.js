$(function() {
  const recipes = [
    {
      title: "Пица",
      calories: 260,
      type: "main",
      description: "Традиционно италианско ястие",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Сандвич",
      calories: 320,
      type: "breakfast",
      description: "Неустоим тост с авокадо и яйца",
      image:
        "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=653&q=80"
    },
    {
      title: "Паста",
      calories: 130,
      type: "main",
      description: "Прясна паста по домашна рецепта",
      image:
        "https://images.unsplash.com/photo-1560788784-66eda82b5eb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Торта",
      calories: 450,
      type: "dessert",
      description: "Домашно приготвена торта",
      image:
        "https://images.unsplash.com/photo-1551879400-111a9087cd86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjIxMTIzfQ&auto=format&fit=crop&w=500&q=60"
    }
  ];

  // render cards from array
  const $recipeTemplate = $('#recipe-template');
  const $recipesList = $('recipes-list');
  const caloriesMetric = 'kcal';
  function renderRecipes(recipesArray){

  }
  recipes.forEach(function(recipe){
    const $templateClone = $recipeTemplate.clone();
    $templateClone.attr('id','');
    $templateClone.removeClass('d-none');
    $templateClone.find('.card-title').text(recipe. title);
    $templateClone.find('.card-descripcion').text(recipe. descripcion);
    $templateClone.find('.card-calories').text('${recipe. calories} ${caloriesMetrix}');
    $templateClone.find('.card-img').attr('src', recipe.image);
    $recipesList.append($templateClone);
    });

  // add recipe form and hide modal
  const $recipeForm = $('#add-recipe-form');
    $recipeForm.submit(function(event) {
    event.preventDefault();

    
    const recipeTitle = $recipeForm.find('input[name="title"]').val();
    const recipeImage = $recipeForm.find('input[name="image"]').val();
    const recipeCalories = $recipeForm.find('input[name="calories"]').val();
    const recipeType = $recipeForm.find('input[name="type"]').val();
    const recipeDescription = $recipeForm.find('input[name="description"]').val();

    const newRecipe = {
      title: recipeTitle,
      image: recipeImage,
      calories: recipeCalories,
      type: recipeType,
      descripcion: recipeDescription
    };

    recipes.unshift(newRecipe);
    renderRecipes();
    $('#addModal').modal('hide');
    $recipeForm[0].reset();
  })

  // filter by type
  const $recipeTypeSelect = $('#food-type');
  $recipeTypeSelect.change(function() {
    const selectedType = $recipeTypeSelect.val();
    const filteredRecipes = recipes.filter(recipe => recipe.type === selectedType);
    renderRecipes(recipes);
  })


  // calories range
  const $sliderRange = $( "#slider-range");
  $sliderRange.slider({
  range: true,
    min: 0,
    max: 500,
    values: [ 75, 300 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );

  
  // happy coding


