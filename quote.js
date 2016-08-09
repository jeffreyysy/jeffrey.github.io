$(document).ready(function(){
		var quoteSource=[
		{
			quote: "The goal of education is the advancement of knowledge and the dissemination of truth.",
			name:"John F. Kennedy"
	    },
	    {
	    	quote:"Let us have peace.",
	    	name:"Ulysses S. Grant"
	    },
	    {
	    	quote:"Things are more like today than they have ever been before.",
	    	name:"Gerald R. Ford"
	    },
	    {
	    	quote:"Freedom is never more than one generation away from extinction. We didn't pass it to our children in the bloodstream. It must be fought for, protected, and handed on for them to do the same.",
	    	name:"Ronald Reagan"
	    },
	    {
	    	quote:"If you're walking down the right path and you're willing to keep walking, evenetually you'll make progress.",
	    	name:"Barack Obama"
	    },
	    {
	    	quote:"All men are equal before fish.",
	    	name:"Herbert Hoover"
	    },
	    {
	    	quote:"There are no good laws but such as repeal other laws.",
	    	name:"Andrew Johnson"
	    },
	    {
	    	quote:"Yesterday is not ours to recover, but tomorrow is ours to win or lose.",
	    	name:"Lyndon B. Johnson"
	    },
	    {
	    	quote:"Our greatest happiness does not depend on the condition of life in which chance has placed us, but is always the result of a good consicience, good health, occupation, and freedom in all just pursuits.",
	    	name:"Thomas Jefferson"
	    },
	    {
	    	quote:"All growth depends upon activity. There is no development physically or intellectually without effort, and effort means work.",
	    	name:"Calvin Coolidge"
	    },
	    {
	    	quote:"Plans are nothing; planning is everything.",
	    	name:"Dwight D. Eisenhower"
	    },
	    {
	    	quote:"Promising too much can be as cruel as caring too little.",
	    	name:"William J. Clinton"
	    },
	    {
	    	quote:"It is far better to be alone, than to be in bad company.",
	    	name:"George Washington"
	    },
	    {
	    	quote:"Well, I screwed it up real good, didn't I.",
	    	name:"Richard Nixon"
	    },
	    {
	    	quote:"Believe you can and you're halfway there.",
	    	name:"Theodore Roosevelt"
	    },
	    {
	    	quote:"Wealth can only be accumulated by the earnings of industry and the savings of frugality.",
	    	name:"John Tyler"
	    },
	    {
	    	quote:"In the end, it's not the years in your life that count. It's the life in your years.",
	    	name:"Abraham Lincoln"
	    },
	    {
	    	quote:"Ambition must be made to counteract ambition.",
	    	name:"James Madison"
	    },
	    {
	    	quote:"In the time of darkest defeat, victory may be nearest.",
	    	name:"William McKinley"
	    },
	    {
	    	quote:"Great lives never go out; they go on.",
	    	name:"Benjamin Harrison"
	    },
	    {
	    	quote:"If you can't convince them, confuse them.",
	    	name:"Harry S. Truman"
	    },
	    {
	    	quote:"It's clearly a budget. It's got a lot of numbers in it.",
	    	name:"George W. Bush"
	    },
	    {
	    	quote:"I have tried so hard to do right.",
	    	name:"Grover Cleveland"
	    },
	    {
	    	quote:"Ideas control the world.",
	    	name:"James A. Garfield"
	    }

	];


		$('#quoteButton').click(function(evt){

			var quote = $('#quoteContainer p').text();
			var quoteGenius = $('#quoteGenius').text();

			evt.preventDefault();

			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);

			for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber].quote;
			var newQuoteGenius = quoteSource[randomNumber].name;

      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');

      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
				quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>');


        quoteContainer.fadeIn(timeAnimation);
      });

			break;
		};

	});


});
