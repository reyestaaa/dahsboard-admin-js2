import React , {useEffect , useState} from 'react';
import { app } from "../../../../config/app"
import ReactSpeedometer from "react-d3-speedometer"
import axios from "axios"
import "./speedometerStyle.css"

function Speedometer(props) {

    const [percent, setPercent] = useState([])

    useEffect(()=>{
      getApiPercent()
    },
    [props.idModule])

    const getApiPercent = async()=>{

      let url =`${app}`;
      if(props.name === "completed"){
        url += '/completedPercent'
      }
      else if(props.name === "onprogress"){
        url += '/onprogressPercent'
      }
      else {
        url += '/overdueNumeric'
      }

      const result = await axios.get(url+`?idProject=${props.idProject}&idModule=${props.idModule}`).then(res=>{
        return res.data.data.length > 0 ? res.data.data[0].status : 0 
      })
      .catch(err=> {throw err})
      setPercent(result)
    }

    return (
      <div className="spedometer-item">
        <div className="title">
            <span className="text-title">{props.title}</span>
        </div>
        <div>
          <ReactSpeedometer
          width={300}
          height={200}
          needleHeightRatio={0.8}
          value={percent}
          maxValue={100}
          customSegmentStops={ [0 , 25, 50, 75, 100]}
          segmentColors={['#fb0216', '#ffd154', '#ffd154', '#13ac57']}
          needleTransition="easeElastic"
          needleColor={'#0071FF'}
          textColor={'#000000'}
        />
        </div>
      </div>
    )
  }

export default Speedometer;