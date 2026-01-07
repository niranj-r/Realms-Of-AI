import "../styles/EventDetails.css";
import EventCardImage from "../assets/cards/event2-image.png";
import EventCardTitle from "../assets/cards/event2-title.png";
import Navbare from "../components/Navbar-events.jsx";

export default function EventDetails() {
    return (
        <section className="event-details-section">
            <Navbare />
            <div className="event-details-top-line-thin"></div>

            <div className="event-details-grid"></div>

            <div className="event-details-container">

                {/* LEFT CARD */}
                <div className="event-details-left">
                    <div className="event-details-card">
                        <img
                            src={EventCardImage}
                            alt=""
                            className="event-details-card-image"
                        />
                        <img
                            src={EventCardTitle}
                            alt=""
                            className="event-details-card-title"
                        />
                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="event-details-right">

                    {/* DETAILS BOX */}
                    <div className="event-details-content">
                        <h3>Old Classics. New Souls.</h3>

                        <p>
                            <strong>
                                How do you turn a Shakespearean tragedy into a 90s sitcom, or a gritty noir
                                thriller into a vibrant Broadway musical?
                            </strong>
                            <br />
                            Script Shift is a creative writing competition that challenges participants to
                            collaborate with artificial intelligence as a co-author, reimagining some of
                            the most iconic moments from literary and cinematic history through an entirely
                            new stylistic lens.
                        </p>

                        <h4>The Challenge</h4>
                        <p>
                            The objective is simple in theory, yet difficult to master. Participants must
                            select a well-known movie scene or a novel excerpt and guide an AI text generator
                            to perform a complete stylistic transformation. This is not a summarization task;
                            entries should demonstrate a full tonal and genre shift while preserving the
                            core narrative, characters, and emotional essence of the original work.
                        </p>

                        <h4>Who Can Join?</h4>
                        <p>
                            The competition is open to everyone, including screenwriters, novelists, prompt
                            engineers, and creative thinkers who enjoy exploring imaginative “What If?”
                            scenarios. No advanced technical or coding expertise is required—only a strong
                            sense of creative direction and storytelling.
                        </p>

                        <h4>How to Participate</h4>
                        <p>
                            Participants must begin by selecting a recognizable source text, either a movie
                            script scene or a novel excerpt. A target genre or stylistic direction should then
                            be clearly defined, such as cyberpunk, romantic comedy, horror, or Victorian-era
                            poetry. Using an AI text generation tool, participants should iteratively refine
                            their prompts until the rewritten scene convincingly embodies the chosen style
                            while remaining faithful to the original narrative intent.
                        </p>

                        <h4>Submission Format</h4>
                        <p>
                            To be considered for evaluation, each submission must include three components:
                            the original source text along with its title, the exact prompt used to instruct
                            the AI, and the final AI-generated rewrite presented in its transformed style.
                            Together, these elements demonstrate both creative intent and prompt engineering
                            skill.
                        </p>
                    </div>


                </div>
            </div>

            <div className="event-details-bottom-line"></div>
            <div className="event-details-bottom-line-violet"></div>

        </section>
    );
}
