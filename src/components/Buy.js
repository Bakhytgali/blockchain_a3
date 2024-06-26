import { ethers } from "ethers";
import "../styles/Buy.css"
const Buy = ({ state }) => {
  const buyChai = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    console.log(name, message, contract);
    const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.buyChai(name, message, amount);
    await transaction.wait();
    console.log("Transaction is done");
  };
  return (
    <>
      <div className="container-md" style={{ width: "100%", marginTop: "25px" }}>
        <form onSubmit={buyChai}>
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
            Pay
          </button>
        </form>
      </div>
    </>
  );
};
export default Buy;
