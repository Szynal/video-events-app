import React, { Component } from 'react';
import styled from 'styled-components';
import { ConferenceRoom } from '@voxeet/react-components';

class Conference extends Component {
    handleOnConnect = () => {
        console.log('Participant connected');
    };

    handleOnLeave = () => {
        console.log('Participant disconnected');
        this.props.history.push('/');
    };

    get settings() {
        return {
            consumerKey: process.env.REACT_APP_VOX_KEY,
            consumerSecret: process.env.REACT_APP_VOX_SECRET,
            constraints: {
                audio: true,
                video: true,
            },
            videoRatio: {
                width: 1920,
                height: 1080,
            },
            videoCodec: 'H264',
        };
    }

    render() {
        const { match } = this.props;
        return (
            <ConferenceRoom
                isWidget={false}
                autoJoin
                kickOnHangUp
                handleOnLeave={this.handleOnLeave}
                handleOnConnect={this.handleOnConnect}
                {...this.settings}
                conferenceAlias={match.params.conferenceAlias}
            />
        );
    }
}

export default Conference;