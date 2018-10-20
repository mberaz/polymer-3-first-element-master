import {
  PolymerElement,
  html
} from '@polymer/polymer/polymer-element.js';
import {
  DomIf as DomIf
} from '@polymer/polymer/lib/elements/dom-if.js';

class MichaelElement extends PolymerElement {
  static get template() {
    return html `
      <style>
      :host {
        display: inline-block;
        border: 2px solid black;
        background-color: lightseagreen;
        margin: 5px;
        clear: both;
    }

    .title-span {
        font-weight: bold;
        color: rebeccapurple;
    }
    .all-hail
    {
        color: orange;
    }
      </style>
      
      <h1>This is a form element</h1>
        <h3>Made by <span class="title-span">[[fullName]]</span></h3>
        <div>
            <input type="text" value="{{message::input}}" />
            <button on-click="handleClick">Send message</button>
        </div>
        <br/>
        <h3 class="all-hail">{{_text(isbaron)}}</h3> 

        <template is="dom-if" if="{{isbaron}}">
          <h3 class="all-hail">All hail the hypnotoad!</h3> 
          <div>{{user.firstname}} {{user.lastname}}</div>
          <div>[[message]]</div>
          <h4>Age: {{user.age}}</h4>
      </template>
    `;
  }
  static get properties() {
    return {
      fullName: {
        type: String,
        //   notify: true,
        //    reflectToAttribute: true,
      },
      message: {
        type: String,
        readOnly: false
      },
      isbaron: {
        type: Boolean,
        readOnly: false,
        notify: true,
      },
      user: {
        type: Object,
        readOnly: false,
        notify: true,
       // reflectToAttribute: true,

      }
    }
  }

  constructor() {
    super();
    super.connectedCallback();

  }

  calc(isbaron) {
    return isbaron;
  }
  _text(isbaron) {
    return isbaron === true ? 'Welcome Baron!' : 'You ae not a baron!';
  }
  handleClick() {

    this.dispatchEvent(new CustomEvent('form.element.message', {
      detail: {
        message: this.message
      }
    }));
  }
  handleOutSideClick() {
    this.isbaron = true;
    this.message = 'Hell NO!';
    console.log(this.message);
  }
}
customElements.define('michael-element', MichaelElement);