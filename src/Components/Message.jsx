

function Message({msg, setMsg}) {

  if (msg=== null){
    return
  }

  return (
    <div className="msg-bin">
          <div className="toast show" role="alert">
              <div className="toast-header" style={{backgroundColor: msg.color}}>
                  <strong className="me-auto" style={{color: 'white'}}>Pranešimas</strong>
                  <button onClick={() => setMsg(null)} type="button" className="btn-close"></button>
              </div>
              <div className="toast-body">
                  {msg.text}
              </div>
          </div>
    </div>

)
}

export default Message;