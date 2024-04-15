class Start extends Scene 
{
    create() 
    {
        // this.engine.setTitle("Title goes here"); // TODO: replace this text using this.engine.storyData to find the story title
        this.engine.setTitle(this.engine.storyData.Title); // Done: replace this text using this.engine.storyData to find the story title
        this.engine.addChoice("Begin the story");
    }

    handleChoice() 
    {
        // this.engine.gotoScene(Location, "Home"); // TODO: replace this text by the initial location of the story
        this.engine.gotoScene(Location, this.engine.storyData.InitialLocation); // TODO: replace this text by the initial location of the story
    }
}

class Location extends Scene 
{
    create(key) 
    {
        // let locationData = undefined; // TODO: use `key` to get the data object for the current story location
        let locationData = this.engine.storyData.Locations[key]; // Done: use `key` to get the data object for the current story location

        // this.engine.show("Body text goes here"); // TODO: replace this text by the Body of the location data
        this.engine.show(locationData.Body); // TODO: replace this text by the Body of the location data
        

        // if(true) { // TODO: check if the location has any Choices
        // if(key.Location) { // TODO: check if the location has any Choices
        // Done
        if(locationData.Choices) 
        {
            for(let choice of locationData.Choices) // TODO: loop over the location's Choices
            { 
                this.engine.addChoice(choice.Text, choice); // TODO: use the Text of the choice

                // Done: add a useful second argument to addChoice so that the current code of handleChoice below works
                // this.engine.addChoice(choice.Text, choice.Target); // TODO: use the Text of the choice
            }
        } 
        else 
        {
            this.engine.addChoice("The end.")
        }
    }
    

    handleChoice(choice) {
        if(choice) {
            this.engine.show("&gt; "+choice.Text);
            this.engine.gotoScene(Location, choice.Target);
        } else {
            this.engine.gotoScene(End);
        }
    }
}

class End extends Scene {
    create() {
        this.engine.show("<hr>");
        this.engine.show(this.engine.storyData.Credits);
    }
}


Engine.load(Start, 'myStory.json');
