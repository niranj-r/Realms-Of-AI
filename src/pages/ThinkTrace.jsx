import "../styles/EventDetails.css";
import EventCardImage from "../assets/cards/event3-image.png";
import EventCardTitle from "../assets/cards/event3-title.png";
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
                        <h3>Solve the Puzzle. Skip the Code.</h3>

                        <p>
                            <strong>
                                Think Trace is a high-stakes, no-code problem-solving competition designed for
                                architects of logic.
                            </strong>
                            This event challenges participants to break down complex problems, visualize
                            decision-making pathways, and outmaneuver logical bottlenecks—all without writing
                            a single line of code. If you can reason through a system and trace a solution
                            step by step, you have what it takes to capture the flag.
                        </p>

                        <h4>The Challenge</h4>
                        <p>
                            Participants are presented with an AI-related logic or decision-making problem
                            that prioritizes reasoning over implementation. Rather than wrestling with syntax
                            or compilers, the focus is on understanding the problem itself. The objective is
                            to trace a clear, efficient path to the solution using conceptual frameworks and
                            visual logic that demonstrate how an intelligent system should behave.
                        </p>

                        <h4>Who Can Participate?</h4>
                        <p>
                            Think Trace is beginner-friendly and open to all. No prior coding experience is
                            required. The competition is especially well-suited for strategic thinkers,
                            students, UX designers, and anyone fascinated by how complex systems operate.
                            Participants may compete individually to solve the challenge.
                        </p>

                        <h4>How to Compete</h4>
                        <p>
                            Each participant will receive a problem statement involving AI logic,
                            such as designing a decision-making workflow for an autonomous system operating
                            under constraints. Competitors must analyze the scenario, map out the logical
                            steps the AI should follow, and present the solution using no-code methods. These
                            may include flowcharts, logic diagrams, or structured pseudocode written in plain
                            English using clear “if–then” reasoning.
                        </p>

                        <h4>Submission Format</h4>
                        <p>
                            All entries must be submitted through the official online portal. Submissions
                            should include a visual outline of the proposed solution, provided as a
                            high-resolution image or PDF, along with a concise explanation describing the
                            rationale behind the chosen logical approach. This explanation should clearly
                            justify the decision-making path and demonstrate the participant’s problem-solving
                            strategy.
                        </p>
                    </div>


                </div>
            </div>

            <div className="event-details-bottom-line"></div>
            <div className="event-details-bottom-line-violet"></div>

        </section>
    );
}
