import { useState, useEffect } from "react";

const Memos = ({ state }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const fetchMemos = async () => {
      const allMemos = await contract.getMemos();
      const lastFiveMemos = allMemos.slice(Math.max(allMemos.length - 5, 0));
      setMemos(lastFiveMemos);
    };

    contract && fetchMemos();
  }, [contract]);

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "100px", marginBottom: "50px", color: "white" }}>Donation History</h1>
      {memos.map((memo, index) => {
        return (
          <div className="container-fluid" style={{ width: "100%" }} key={index}>
            <table style={{ marginBottom: "10px", backgroundColor: "#070F2B", color: "white", borderCollapse: "collapse", width: "100%" }}>
              <tbody>
                <tr>
                  <td style={{ border: "1px solid white", padding: "10px", width: "25%", overflow: "hidden", textOverflow: "ellipsis" }}>
                    <strong>Name: <br/> </strong> {memo.name}
                  </td>
                  <td style={{ border: "1px solid white", padding: "10px", width: "25%", overflow: "hidden", textOverflow: "ellipsis" }}>
                    <strong>Date: <br/> </strong> {new Date(memo.timestamp * 1000).toLocaleString()}
                  </td>
                  <td style={{ border: "1px solid white", padding: "10px", width: "25%", overflow: "hidden", textOverflow: "ellipsis" }}>
                    <strong>Message: <br/> </strong> {memo.message}
                  </td>
                  <td style={{ border: "1px solid white", padding: "10px", width: "25%", overflow: "hidden", textOverflow: "ellipsis" }}>
                    <strong>From: <br/> </strong> {memo.from}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
};

export default Memos;
