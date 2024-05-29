import { ethers } from "ethers";
import "../styles/Buy.css";

const Buy = ({ state }) => {
  const programs = [
    {
      title: "Anti Cancer - 0xA1D311D91CB5b69049d21Bb02dD35189B86574E3",
      subtitle: "Help us fight cancer"
    },
    {
      title: "Floodings in Kazakhstan - 0x39A74493D7BaD9462e512638468BB71987D25CB7",
      subtitle: "Description of Program 2"
    },
    {
      title: "Autism - 0xe4Bb34cBB333f14E2bFf989B29e396f62F7ebdad",
      subtitle: "Description of Program 3"
    }
  ];

  const buyChai = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.buyChai(name, message, amount);
    await transaction.wait();
    console.log("Transaction is done");
  };

  return (
    <>
      <div className="container-md" style={{ width: "100%", marginTop: "25px" }}>
        <form onSubmit={buyChai}>
          <div className="mb-3 program-dropdown">
            <label className="form-label">Program</label>
            <select className="form-select" id="program">
              <option value="">Select a program</option>
              {programs.map((program, index) => (
                <option key={index} value={program.title}>{program.title}</option>
              ))}
            </select>
          </div>
          <div className="mb-3 name">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-3 message">
            <label className="form-label mes">Message</label>
            <input
              type="text"
              className="form-control"
              id="message"
              placeholder="Enter Your Message"
            />
          </div>
          <div className="mb-3 message">
            <label className="form-label mes">Amount</label>
            <input
              type="text"
              className="form-control"
              id="amount"
              placeholder="Enter Your Amount"
            />
          </div>
          <button
            type="submit"
            className="btn"
            disabled={!state.contract}
          >
            Donate
          </button>
        </form>
      </div>
    </>
  );
};

export default Buy;
