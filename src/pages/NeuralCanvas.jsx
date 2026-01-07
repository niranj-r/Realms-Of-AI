import "../styles/EventDetails.css";
import EventCardImage from "../assets/cards/event1-image.png";
import EventCardTitle from "../assets/cards/event1-title.png";
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
                        <h3>Where Code Meets Creativity</h3>

                        <p>
                            <strong>Are you a whisperer of algorithms? A visionary of the digital canvas?</strong>
                            This competition invites creators to step into a creative showdown where the most
                            powerful tool is not a brush or a lens, but language itself. Participants are
                            challenged to design ingenious, descriptive, and boundary-pushing prompts that
                            compel artificial intelligence to generate the unexpected.
                        </p>

                        <h4>Competition Overview</h4>
                        <p>
                            In this challenge, participants compete to craft visually compelling outputs
                            using AI image generation tools. The focus extends beyond aesthetic appeal to
                            the art of <strong>prompt engineering</strong>—how effectively language can guide
                            an AI system to produce complex, imaginative, and conceptually rich visuals.
                        </p>

                        <h4>Who Can Participate?</h4>
                        <p>
                            The competition is open to all—professional digital artists, prompt engineers,
                            hobbyists, and AI enthusiasts alike. Anyone with a creative vision and a passion
                            for experimenting with AI-driven visuals is welcome to participate.
                        </p>

                        <h4>How to Enter</h4>
                        <p>
                            Participants must design a unique and descriptive prompt intended to challenge
                            an AI image generator. Any image generation platform may be used, including but
                            not limited to Midjourney, DALL·E, or Stable Diffusion. The prompt should be crafted
                            with intent, creativity, and clarity to achieve the desired visual outcome.
                        </p>

                        <h4>Submission Requirements</h4>
                        <p>
                            Each submission must include the final generated image and the exact prompt used
                            to create it. Participants are also required to specify the AI tool used for image
                            generation. Optionally, creators may include a short note describing any advanced
                            techniques applied, such as negative prompts, weighting, or multi-stage prompting.
                        </p>
                    </div>

                </div>
            </div>

            <div className="event-details-bottom-line"></div>
            <div className="event-details-bottom-line-violet"></div>

        </section>
    );
}
