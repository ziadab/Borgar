import React from "react";
import Modal from "../../components/UI/Modal/Modal";

export default (WrapperComponenet, axios) => {
  return class extends React.Component {
    state = {
      error: null
    };
    componentWillUnmount() {
      axios.interceptors.response.eject(this.resInterceptors);
      axios.interceptors.response.eject(this.reqInterceptors);
    }

    componentWillMount() {
      this.reqInterceptors = axios.interceptors.request.use(
        req => req,
        err => {
          this.setState({ error: err });
        }
      );

      this.resInterceptors = axios.interceptors.response.use(
        res => res,
        err => {
          this.setState({ error: err });
        }
      );
    }

    errorHAnflerConfirmation = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <React.Fragment>
          <Modal
            show={this.state.error}
            closeModal={this.errorHAnflerConfirmation}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrapperComponenet {...this.props} />
        </React.Fragment>
      );
    }
  };
};
