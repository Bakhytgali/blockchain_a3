function Submit() {
    return (
        <div style={{paddingTop: "50px", color: "#fff"}}>

            <h4>
                You can leave your review about our app!
            </h4>

            <form style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <input type="text" style={{height: "100px", width: "100%"}}/>
                <button type="button" style={{width: "100px", marginTop: "30px", backgroundColor: "inherit", color: "white",
                padding: "3px 14px", border: "2px solid #fff", borderRadius: "5px"}}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Submit;