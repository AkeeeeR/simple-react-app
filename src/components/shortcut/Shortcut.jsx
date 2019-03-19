import React from 'react';
import '../content/Content.scss';
import Content from '../content/Content';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

const Shortcut = () => {
    return (
        <article>
            <b>Lorem ipsum dolor</b> <br /><br />
            sit amet, consectetur adipiscing elit. In vitae magna eu dui eleifend venenatis. Aenean in eros ultricies, cursus eros sit amet, bibendum ex. Curabitur id commodo ex. Etiam blandit lorem metus, a dignissim nibh auctor ut. Aliquam eget sapien venenatis est dictum cursus sed at neque. Donec ullamcorper at libero et luctus. Phasellus eget lacus sit amet nulla dapibus congue vel sollicitudin purus. Aliquam eu facilisis lorem.
            Suspendisse molestie semper dolor sit amet fringilla. Duis eu turpis pharetra, pharetra sem vel, condimentum velit. Etiam pulvinar aliquam nisl, sed aliquet orci tempor ac. Duis ultricies massa iaculis dolor vehicula laoreet. Aenean vestibulum in lacus ac ultricies. Suspendisse congue egestas magna non rhoncus. Sed lobortis urna eu ex eleifend egestas. Pellentesque a feugiat urna, sit amet rutrum arcu. Vivamus consectetur in libero nec volutpat. Ut ultrices gravida blandit. Maecenas blandit urna quis lectus egestas pellentesque.
            Fusce et euismod neque, ut sodales neque. Aliquam eget orci lacus. Donec rhoncus lectus ac sem viverra suscipit. Nunc ultricies fringilla sem, vitae aliquet justo sollicitudin sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras pulvinar purus lacus. Duis id malesuada lorem. Pellentesque vehicula porta dolor at malesuada. In elit elit, sagittis eu leo non, mollis tincidunt libero. In malesuada risus ex, fringilla finibus ligula scelerisque at. Suspendisse euismod cursus vulputate. Praesent iaculis, massa rhoncus dignissim bibendum, elit tortor rhoncus sapien, eget rutrum lorem augue non neque. Nam sit amet diam eu lacus porta scelerisque. Sed eget massa vitae dolor accumsan scelerisque.
            <i className="fas fa-book-open"><Link to="/content">więcej</Link></i>
        </article>
    );
}

export default Shortcut;