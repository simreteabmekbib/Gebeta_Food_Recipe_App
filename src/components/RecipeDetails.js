import React from 'react';
import './RecipeDetails.css';

function RecipeDetails() {
    return (
        <>
            <div className="card recipe-imgs">
            <img src="/images/doro.jpg" className="img-fluid card-img-top r-card-img"/>
            </div>

            <div className="overview">
            <p>Doro Wat is one of the most famous of all African dishes.  You will find it in every Ethiopian restaurant and virtually anyone who is familiar with African cuisine will have heard of it.  Another version, though not as commonly known here, is Sega Wat, made with beef (fyi, you’ll find recipes online calling it Sik Sik Wat, but I’ve confirmed with the chefs of several Ethiopian restaurants that it’s Sega Wat).  You can directly substitute beef for chicken and follow the same cooking instructions.</p>
            <p className="mb-5">Doro Wat is traditionally made very spicy.  Super spicy.  Like I-don’t-know-how-Ethiopians-have-any-taste-buds-left spicy.  Western adaptations are still spicy, but quite tame compared to the real deal.</p>
            <hr/>
            <iframe class="pt-3 ps-5 pb-5 iframe"  src="https://www.youtube.com/embed/gBIPBJjjPUY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div className="recipe-box p-5 mb-5 pb-5">
            <p><span className="title">Total time:</span> 55 minutes</p>
            <hr/>
            <p className="title pb-0 mb-2">Ingredients</p>
            <ul className="ps-3 ingdts">
                <li>2 pounds skinless chicken legs</li>
                <li>Lemon juice</li>
                <li>2 large red onions, finely chopped</li>
            </ul>
            <hr/>
            <p className="title">Preparation</p>
            <ol className="ps-4 prep">
                <li className="pb-4">Wash and soak the chicken in cold water with lemon squeezed into it for 30 minutes. (This removes any bacteria and tenderizes the meat.)</li>
                <li className="pb-4">Caramelize the red onions on low heat in a large pot for 1 hour. Add the berbere, Niter Kibbeh, garlic and ginger and cook for 30 minutes on medium-low heat. Add the marinated chicken and cook on medium-low heat, 30 to 45 minutes. Add in the hard-boiled eggs and salt to taste. Simmer on low heat for an additional 10 minutes and serve on the Injera.</li>
                <li className="pb-4"><span className="bold">Niter Kibbeh (Ethiopian Spiced Butter):</span> Melt the butter on low heat in a large pot. Blend together the bishop seeds, cardamom seeds and black cumin until powder form using coffee grinder or food processor. Pour into the butter. Add the dried koseret. Bring to a boil then simmer for 15 to 20 minutes. Remove from the heat and cool. When room temperature, skim the frothy milk solids off of the top. Carefully pour the clear, clarified butter into a large storage container.</li>
            </ol>
            </div>
        </>
    )
}

export default RecipeDetails
