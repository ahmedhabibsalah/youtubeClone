import React from 'react';
import './SearchPage.css';
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
              <TuneIcon/>
              <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
            image="https://yt3.ggpht.com/ytc/AAUvwng76cTETu1glc_8o4UBUiFL2v-m3818ACnK0JLFPA=s176-c-k-c0x00ffffff-no-rj-mo"
            channel="PewDiePie"
            verified
            subs="108M"
            noOfVideos={4266}
            description="i make videos"
            />
            <hr />
            <VideoRow
            views="487K"
            subs="108M"
            description="minecraft hardcore part 5"
            timestamp="45 minutes ago"
            channel="PewDiePie"
            title="Nooooooooooooooo"
            image="http://i3.ytimg.com/vi/p1skpV2fhN0/maxresdefault.jpg" />
            <VideoRow
            views="487K"
            subs="108M"
            description="minecraft hardcore part 5"
            timestamp="45 minutes ago"
            channel="PewDiePie"
            title="Nooooooooooooooo"
            image="http://i3.ytimg.com/vi/p1skpV2fhN0/maxresdefault.jpg" />
            <VideoRow
            views="487K"
            subs="108M"
            description="minecraft hardcore part 5"
            timestamp="45 minutes ago"
            channel="PewDiePie"
            title="Nooooooooooooooo"
            image="http://i3.ytimg.com/vi/p1skpV2fhN0/maxresdefault.jpg" />
            <VideoRow
            views="487K"
            subs="108M"
            description="minecraft hardcore part 5"
            timestamp="45 minutes ago"
            channel="PewDiePie"
            title="Nooooooooooooooo"
            image="http://i3.ytimg.com/vi/p1skpV2fhN0/maxresdefault.jpg" />
        </div>
    )
}

export default SearchPage
