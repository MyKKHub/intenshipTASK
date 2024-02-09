// Fitness.js

import React from 'react';
import './Fitness.css'; // Make sure to link your CSS file
import HomeHeader from '../../Home///HeaderHome/HeaderHome';
import FooterHome from '../../Home/FooterHome/FooterHome';

function Fitness() {
  return (
    <div className='fitnesssbody'>
      <header>
       <HomeHeader />
      </header>
      <div className='container'>
        <main >
        <section id="health-tips">
          <h2>Health Tips</h2>
          <div className="grid-container">
            <div className="grid-item">
              <img src="https://source.unsplash.com/400x300/?fitness" alt="Fitness Image 1" />
              <div className="overlay">
                <h3>10 Tips for a Healthy Lifestyle</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel justo vel urna tristique pretium.</p>
                <a href="#">Read more</a>
              </div>
            </div>

            <div className="grid-item">
              <img src="https://source.unsplash.com/400x300/?healthy" alt="Fitness Image 2" />
              <div className="overlay">
                <h3>Boost Your Immune System Naturally</h3>
                <p>Nulla facilisi. Sed vel justo sed neque dignissim tincidunt nec id est.</p>
                <a href="#">Read more</a>
              </div>
            </div>
            {/* Add more grid items as needed */}
          </div>
        </section>

        <section id="workout-routines">
          <h2>Workout Routines</h2>
          <div className="grid-container">
            <div className="grid-item">
              <img src="https://source.unsplash.com/400x300/?workout" alt="Fitness Image 3" />
              <div className="overlay">
                <h3>Effective Full-Body Workouts</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel justo vel urna tristique pretium.</p>
                <a href="#">Read more</a>
              </div>
            </div>

            <div className="grid-item">
              <img src="https://source.unsplash.com/400x300/?exercise" alt="Fitness Image 4" />
              <div className="overlay">
                <h3>Cardio vs. Strength Training</h3>
                <p>Nulla facilisi. Sed vel justo sed neque dignissim tincidunt nec id est.</p>
                <a href="#">Read more</a>
              </div>
            </div>
            {/* Add more grid items as needed */}
          </div>
        </section>

        <section id="healthy-recipes">
          <h2>Healthy Recipes</h2>
          <div className="grid-container">
            <div className="grid-item">
              <img src="https://source.unsplash.com/400x300/?food" alt="Fitness Image 5" />
              <div className="overlay">
                <h3>Quick and Easy Protein Smoothie</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel justo vel urna tristique pretium.</p>
                <a href="#">Read more</a>
              </div>
            </div>

            <div className="grid-item">
              <img src="https://source.unsplash.com/400x300/?salad" alt="Fitness Image 6" />
              <div className="overlay">
                <h3>Delicious Avocado Salad</h3>
                <p>Nulla facilisi. Sed vel justo sed neque dignissim tincidunt nec id est.</p>
                <a href="#">Read more</a>
              </div>
            </div>
            {/* Add more grid items as needed */}
          </div>
        </section>

        <section id="motivation-tips">
          <h2>Motivation Tips</h2>
          <div className="grid-container">
            <div className="grid-item">
              <img src="https://source.unsplash.com/400x300/?motivation" alt="Fitness Image 7" />
              <div className="overlay">
                <h3>Stay Consistent with Your Fitness Goals</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel justo vel urna tristique pretium.</p>
                <a href="#">Read more</a>
              </div>
            </div>

            <div className="grid-item">
              <img src="https://source.unsplash.com/400x300/?success" alt="Fitness Image 8" />
              <div className="overlay">
                <h3>Find Your Workout Buddy</h3>
                <p>Nulla facilisi. Sed vel justo sed neque dignissim tincidunt nec id est.</p>
                <a href="#">Read more</a>
              </div>
            </div>
            {/* Add more grid items as needed */}
          </div>
        </section>
        {/* Add more sections as needed */}
      </main>

      <section id="about-fitness">
        <h2>About Fitness</h2>
        <p>Many people strive to be fit. Fitness, after all, is synonymous with health.
        Having a high level of overall fitness is linked with a lower risk of chronic disease, as well as a better ability to manage health issues that do come up. Better fitness also promotes more functionality and mobility throughout one’s life span.

And in the short term, being active can help your day-to-day functioning, from better mood to sharper focus to better sleep.

Simply put: Our bodies are meant to move, and they tend to function better when we’re more fit.

That said, it’s also important to know that there are many different ways to be fit (think of a ballet dancer versus a bodybuilder or a sprinter versus a gymnast). And fitness does not have a singular “look.” In fact, appearance can’t necessarily tell you about someone’s habits, whether they’re actually physically active, or even whether they’re fit at all.
        </p>
        {/* Include the provided detailed content here */}
      </section>

      <section id="components-of-fitness">
        <h2>What it Means to be FIT</h2>
        <p>According to the Physical Activity Guidelines for Americans set forth by the U.S.
        Department of Health and Human Services (HHS), there are five components of physical fitness:

Cardiorespiratory Fitness Your VO2 max is a commonly used measure of this. It’s your body’s ability to uptake and utilize oxygen (which feeds all of your tissues), something that is directly related to your health and quality of life, says Abbie Smith-Ryan, PhD, professor and director of the Applied Physiology Laboratory at the University of North Carolina in Chapel Hill.
Musculoskeletal Fitness This includes muscle strength, endurance, and power.
Flexibility This is the range of motion of your joints.
Balance This is your ability to stay on your feet and steady to avoid falls.
Speed This is how quickly you can move.
A frequently cited peer-reviewed research paper from 1985 defined the difference between the terms “physical activity” (bodily movement resulting in energy expenditure), “exercise” (planned and structured physical activity), and “physical fitness.” The paper defined physical fitness as a set of attributes that people have or achieve that determines their ability to carry out daily tasks with vigor and alertness, without undue fatigue. Cardiorespiratory endurance, muscular endurance, muscular strength, body composition, and flexibility are components that can be used to measure fitness, also according to that paper. 

In the real world, fitness translates to function, says Dr. Smith-Ryan. For example, can you carry your groceries or walk up the stairs without getting winded? Can you run around the backyard with your kids? Can you climb the stairs?

Exercise is distinct from fitness because exercise is what you do to improve your fitness.
        </p>
        {/* Include the provided detailed content here */}
      </section>

      <section id="common-questions">
        <h2>Common Questions & Answers</h2>
        <ul>
          <li><strong>What is the best way to start exercising?</strong><br />Start with mini bursts of movement, such as standing up from your desk and walking around your home/office, walking up your stairs, or taking your dog around the block.</li>
          <li><strong>Do I need a personal trainer?</strong><br />If you are new to exercise or you don’t know how to safely perform exercises or structure a workout plan, a personal trainer can help. Hitting a fitness plateau, not knowing how to train harder, and not knowing how to train safely with a health problem or condition are also all good reasons to seek out a personal trainer. </li>
          <li><strong>Is working out 30 minutes a day long enough?</strong><br />Guidelines from the U.S. Department of Health and Human Services recommend that adults get at least 150 minutes of moderate-intensity physical activity and two days of full-body muscle-strengthening activities per week. That can be accomplished in 30 minutes a day, though more activity may yield more health benefits.</li>
          <li><strong>How do I know if I’m working out hard enough or if I need to increase the intensity of my workout?</strong><br />Experts like to use the “talk test” to determine whether you are maintaining enough effort for it to count as moderate-intensity exercise. You should be moving hard enough that you can talk — but not sing. With vigorous-intensity exercise, you might find yourself breathless and have difficulty talking.</li>
          <li><strong>Should I work out if I’m sick?</strong><br />It’s okay to work out if you have a cold and the symptoms are above the neck, but skip it if you have a fever, fatigue, or muscle aches. If you are going to exercise while sick, don’t go to a gym or another fitness facility; stay home so you don’t infect others.</li>
        </ul>
      </section>

      <section id="types-of-fitness">
        <h2>Types of Fitness</h2>
        <p>There are a few main components of fitness, all of which are important for building a well-rounded exercise routine.  Below, you will find the ones included in the Physical Activity Guidelines for Americans, which HHS highlights as the components that should be included in weekly exercise. (It’s worth noting that many definitions of fitness include other components as well, such as endurance, muscular endurance, power, speed, balance, and agility — as mentioned above.) 

Aerobic (Cardiovascular) Exercise
Aerobic exercise is the foundation of every fitness program — and for good reason. Also called cardiovascular exercise or cardio, this type of physical activity increases your heart rate and breathing rate, which improves your cardiorespiratory fitness, according to the American Heart Association. 

Aerobic exercise includes activities like brisk walking, running, cycling, swimming, aerobic fitness classes (like kickboxing), tennis, dancing, yard work, tennis, and jumping rope, per the Physical Activity Guidelines.

Learn More About Aerobic Exercise

MORE IN AEROBIC EXERCISE
Strength Training
Strength training is an important way to improve mobility and overall functioning, particularly as you get older. “As you age, you lose muscle mass, which can have a significant impact on the quality of life. Strength exercises build bones and muscle, and more muscle protects your body from falls and the fractures that can happen in older age,” says Robert Sallis, MD, a family medicine doctor at Kaiser Permanente in Fontana, California, and chairman of the Exercise Is Medicine initiative with the American College of Sports Medicine (ACSM).

According to the ACSM, the definition of strength or resistance training is exercise that is “designed to improve muscular fitness by exercising a muscle or a muscle group against external resistance.” Activities that answer this call include lifting weights, using resistance bands or your body weight, carrying heavy loads, and even strenuous gardening, per the Physical Activity Guidelines from HHS. 

Learn More About Why Strength Training Is Important and How to Do It

MORE IN STRENGTH TRAINING
Flexibility and Mobility
Flexibility and mobility are both important components of healthy movement, according to the International Sports Sciences Association. However, they are not synonymous. 

Flexibility refers to the ability of tendons, muscles, and ligaments to stretch, while mobility refers to the body’s ability to take a joint through its full range-of-motion. 

There is no specific recommendation for the number of minutes you should do activities that improve flexibility or mobility (such as stretching), and the health benefits of those activities are not known because of a lack of research on the topic, according to the Physical Activity Guidelines from HHS. But the guidelines note that flexibility exercises are important for physical fitness.

And the guidelines do recommend that older adults incorporate balance training into their weekly fitness routine. Evidence suggests that regular exercise that includes balance training can significantly reduce older adults’ risk of falls, which can cause serious and debilitating injuries, among other consequences.

Learn More About How the Different Types of Flexibility Exercises and How to Become More Flexible

MORE IN FLEXIBILITY AND MOBILITY
Rest and Recovery
Building in rest and recovery days allows time for your body to repair the natural damage that occurs to muscles during exercise. Exercise, by definition, puts stress on the muscles and the body. The repairing or healing of that stress is how you get stronger (and fitter). But you need to give the body adequate rest after a workout for that recovery process to happen.

Recovery days can include no physical activity at all or they may look like an active recovery day, which means doing low-intensity, low-impact forms of exercise, such as walking or gentle yoga. Dr. Sallis generally recommends doing some activity every day, such as a 10-minute walk outdoors.

For rest and recovery days, the idea isn’t that you’re immobile on your couch; it’s just that you’re not pushing yourself to a point where physical activity feels strenuous or challenging. </p>
        {/* Include the provided detailed content here */}
      </section>

      <section id="health-benefits">
        <h2>Health Benefits of Exercise</h2>
        <p>Improved fitness drastically reduces the risk of chronic diseases that develop over time. such as heart disease, type 2 diabetes, and even cancer. “The one thing that will help prevent almost any type of disease is fitness,” says Grayson Wickham, DPT, CSCS, founder of Movement Vault, a mobility and movement company in New York City.

In 2007, ACSM partnered with the American Medical Association to launch the Exercise Is Medicine initiative, with the goal of making physical activity assessment part of routine medical care and providing exercise resources to people of all ability levels. “The scientifically proven benefits of physical activity remain indisputable, and they can be as powerful as any pharmaceutical agent in preventing and treating a range of chronic diseases and medical conditions,” the initiative’s website notes.

Here’s a breakdown of those benefits:

Exercise Boosts Your Mood
Regular exercise has been shown to be a buffer against depression and anxiety, according to research. What’s more, other studies show that exercise can help manage the symptoms of depression and help treat it, notes a scientific article. Exercise may help reduce inflammation, something that has been shown to be increased in people with depression; it’s also possible that physical activity promotes favorable changes in the brain, too, say the researchers.

Learn More About the Ways That Being Fit Boosts Energy and Mood

Exercise Is Good for Sleep
Habitual exercise can help you get more restful sleep at night. Of 34 studies included in a systematic review, 29 found that exercise improved sleep quality and was associated with longer bouts of slumber. It may help set your body clock (so that you are alert and sleepy at appropriate times), create chemical changes in the brain that favor sleep, and, as past research indicates, can ease presleep anxiety that may otherwise keep you up.

It’s worth noting, however, that high-intensity exercise done too close to bedtime (within about an hour or two) can make it more difficult for some people to sleep and should be done earlier in the day.

Learn More About the Intimate Relationship Between Fitness and Sleep

Exercise Promotes Long-Term Health
Exercise has been shown to improve brain and bone health, preserve muscle mass (so that you’re not frail as you age), boost your sex life, improve gastrointestinal function, and reduce the risk of many diseases, including cancer and stroke. Research involving more than 116,000 adults also showed that getting the recommended 150 to 300 minutes of physical activity per week decreased the risk of death from any cause by 19 percent.

Learn More About the Amazing Ways Being Fit Boosts Your Health

Fitness Helps You Manage Chronic Disease
Exercise helps the body function, and that includes managing other chronic health problems. According to the Centers for Disease Control and Prevention (CDC), if you have osteoarthritis, high blood pressure, type 2 diabetes, multiple sclerosis, Parkinson’s disease, dementia, or have had a stroke or cancer, physical activity can help. Exercise can help decrease pain, improve insulin sensitivity and blood sugar control, promote mobility, improve heart health, lower the risk of other chronic diseases, and play a role in good mental health.

If you have a chronic disease and you’re looking to stay active or get more active, a walking routine is generally a safe place to start. “The vast majority of people do not need clearance from their doctor to start walking, unless your physician has told you specifically that they don’t want you exercising,” says Sallis. 

He says he wishes that more people would look at physical activity as a baseline and that: “You need to get clearance from your doctor not to exercise,” he says. 

But if you get excessively short of breath, experience chest pain, or have any other concerning symptoms, call your doctor.</p>
        
      </section>

      <section id="how-much-exercise">
        <h2>How Much Exercise Do You Need?</h2>
        <p>Per the Physical Activity Guidelines for Americans from the U.S.Department of Health and Human Services, clocking either 150 minutes of moderate-intensity aerobic activity (such as brisk walking) or 75 minutes of vigorous-intensity aerobic activity (such as jogging or running) per week is the lowest amount of exercise that promotes good health. (Doing a combination of moderate and vigorous activity is also okay, as long as you spread it out over at least two days during the week.)

Additionally, do muscle-strengthening activity at least two days a week, targeting all of the major muscle groups (legs, hips, back, abdomen, chest, shoulders, and arms), according to the guidelines.

There is currently no recommendation for flexibility or mobility work, according to the HHS. But older adults in particular should incorporate balance training into their weekly physical activity.

Doing more physical activity has been linked to even greater health benefits, particularly up to 300 weekly minutes of moderate-intensity exercise (after which the incremental benefits start to flatten out). And know that these baseline fitness recommendations, while they are enough to promote good long-term health, may not be sufficient to meet certain health or fitness goals. (For example, you will need to exercise for a significantly longer amount of time each week if you want to train for a marathon.)

And know that extreme amounts of exercise may put increased stress on the body and can actually lead to some negative health effects; research has yet to determine what that upper limit might be, but the evidence so far suggests that it is at least several times the current weekly minimum recommendations.
</p>
        {/* Include the provided detailed content here */}
      </section>

      <section id="eating-tips">
        <h2>What to Eat Before, During, and After Exercise</h2>
        <p>Fueling your body with adequate and healthy foods also plays an important role in exercise. 
Before Your Workout If you’re exercising shortly after you wake up in the morning, listen to your body’s hunger cues, says Jackie Dikos, RDN, a sports dietitian in Westfield, Indiana, and author of Finish Line Fueling. If you ate a heavier or later dinner the night before, you may not need anything. If you have an intense workout ahead of you and are hungry, you may need a small snack.

Eating easy-to-digest carbohydrates, such as a banana or some cereal just prior to a workout, or a combination of carbs and protein (e.g., toast with nut butter) 30 minutes beforehand will fuel you up for the work ahead. If you recently ate a meal, you may be able to skip the snack entirely.

During Your Workout Shorter workouts don’t require mid-exercise fueling, but longer bouts of endurance exercise do. Consume 30 to 60 grams of carbohydrates every hour after the first 60 minutes of exercise, according to recommendations from the International Society of Sports Nutrition. Sports drinks are one option. 

After Your Workout A low- to moderate-intensity workout, such as a 45-minute brisk walk, doesn’t require immediate refueling (particularly if your next meal is not far away), Dikos says. But if you’ve just done a high-intensity workout, or if you know you’re doing another workout later that day or a tough workout the next day, your body will need fuel. Dikos recommends eating half a gram of carbs per pound of body weight, plus 10 to 20 grams of protein.</p>
        {/* Include the provided detailed content here */}
      </section>

      <section id="motivation-tips">
        <h2>Tips for Getting Started and Staying Motivated to Exercise</h2>
        <p>It can be tough to get into (and stick with) an exercise routine. Here are some tips. It can be tough to get into (and stick with) an exercise routine. Here are some tips:

Break It Up Fitness professionals have changed their tune on this over the years. The current Physical Activity Guidelines for Americans says that everything counts toward those weekly activity targets (as long as the intensity is high enough). You can take a 5-minute walk up the block, climb the stairs in your home a few times, or stand up from your desk and do a set of squats. “More recent data shows that there are health benefits to accumulating activity. Those short ‘exercise snacks’ add up,” says Sallis.
Increase Slowly Jumping into a busy and intense exercise routine can set you up for mental and physical burnout — and it puts you at risk of injury, too. Sallis recommends beginning where you are comfortable (in terms of distance if you are walking or jogging, or in terms of weights if you are strength training) and slowly increasing the duration and intensity over a period of weeks or months. Getting on an exercise program (look at apps or small group training) or finding a personal trainer can help with this progression.
Do ‘Non’-Exercise Exercise Do you count playing with your kids in the backyard, cleaning the house, doing yard work, dancing in your kitchen, and taking the dog out as exercise? You should — because they can all count toward your movement quota, says Sallis. Look at those everyday activities as opportunities to help you get fit and keep moving.
Schedule It Exercise is as important as any other activity. And while small bouts are good, you’ll also probably get to a point where you want to do longer durations. And that’s where looking at your schedule, finding a time that works during your day, and adding it to your calendar (as a “nonnegotiable” meeting) will help, says Smith-Ryan.
Consider HIIT High-intensity interval training (HIIT) can be great for beginners, including those who are sedentary or are overweight or obese. “In our lab, we have almost 100 percent compliance with interval training. HIIT is really easy to buy into and stick with,” Smith-Ryan says. HIIT calls for a shorter duration of exercise than traditional workouts (with the same benefits), resulting in less time commitment and fewer injuries overall, she explains. (Plus, it can be done without equipment, in your home.) Even though it is “high-intensity,” you’ll move at a pace that’s appropriate for your fitness level, and you’ll only do short bouts of the more strenuous type of movement at a time. Recruiting a personal trainer to help you structure a HIIT workout can be a great help.
Phone a Friend Working out with a friend can stoke your motivation, prompt you to try new activities, and keep you consistent, says the CDC. Time to buddy up!
Learn More About How to Find and Stick to an Exercise Routine</p>
        {/* Include the provided detailed content here */}
      </section>

      <section id="home-gym-equipment">
        <h2>What You Should Know About Home Gym Equipment</h2>
        <p>Exercising at home means you get to skip the commute to the gym, and you won’t have to wait for someone else.  to finish up on the machine you want to use. You get to work out whenever it fits into your schedule.

One positive outcome of the pandemic is that there are now so many more online resources for exercise programs, says Smith-Ryan. Many of those programs require no equipment at all and can be easily done with a small amount of floor space.

If you are just starting out, she says that simple body-weight exercises (squats, lunges, pushups) can help build muscle during resistance training. Consider investing in a yoga or exercise mat, so that you can easily do floor exercises. After that, consider collecting resistance bands or a set of dumbbells to up the intensity of strength training.

What you choose will depend on your preferences, budget, and the space available in your home. For instance, a set of resistance bands is cheap and can be stored easily. But know that you can get in a good sweat session without a lot of equipment and without having to spend a lot of money.

add these contents in the above web page dont leave a single word just do whatever you need to style or arrange the content but dont leave a single word</p>
        {/* Include the provided detailed content here */}
      </section>
      </div>
      <footer>
        <FooterHome />
      </footer>
    </div>
  );
}

export default Fitness;
