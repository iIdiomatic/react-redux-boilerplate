import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getSomeDetails} from '../actions/someActions';

class HomePage extends React.Component {
  render() {
    const { getSomeDetails, error, isLoading,someDetails } = this.props;
    console.log("actions: "+getSomeDetails);
    return (
      <div style={{width:"100%", height:"100%"}}>
        
        {error && <h3>Error: {error.response.data}</h3>}
        {isLoading ? <h1>Loading ...</h1>
          : (
            <div style={{alignContent:"center",textAlign:"center", alignItems:"center", justifyContent:"center",  width:500, margin:"auto"}}>
              
              <h1>Click to fetch remote info</h1>
                <button style={{margin: "auto", width:300}} type="button" onClick={() => getSomeDetails(2)}>Fetch Info</button>
              <div style={{textAlign:"center", backgroundColor:"#d3d3d3", marginTop:20}}>
                <b style={{color:"green"}}>{(someDetails && someDetails.length!=0 ) ?JSON.stringify(someDetails): ""}</b>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

HomePage.propTypes = {
  //actions: PropTypes.object.isRequired,
  //subscriberDetails: PropTypes.object,
  //error: PropTypes.object,
};

const mapStateToProps = ({someReducer}) => ({
  someDetails: someReducer.somethings,
  error: someReducer.error,
  isLoading: someReducer.isLoading,
});



export default connect(mapStateToProps, {getSomeDetails})(HomePage);