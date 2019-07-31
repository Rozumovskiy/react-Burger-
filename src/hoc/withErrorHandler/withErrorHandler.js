import React, { Component } from "react";

import Modal from "../../components/UI/Modal/Modal.js";
import Aux from "../Aux/Aux.js";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };

    componentWillMount() {
      this.reqIntersetor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.resntersetor = axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error: error });
        }
      );
    }

    componentWillUnmount() {
        axios.interceptors.request.reject(this.reqIntersetor);
        axios.interceptors.response.reject(this.resIntersetor);
    }

    errorConfirmedHandler = () => {
      test.setState({ error: null });
    };

    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};
export default withErrorHandler;
