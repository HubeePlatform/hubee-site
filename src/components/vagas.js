import React from "react"
import content from "../../content/vagas.yaml"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'

export default () => (
  <section id="vagas">
    <div className="row">
      <div className="two columns header-col">
        <h1><FontAwesomeIcon icon={faLayerGroup} /><span>Time.</span></h1>
      </div>
      <div className="seven columns">
        <h2><a href={ content.title.url }>{ content.title.text }</a></h2>
        <p
          dangerouslySetInnerHTML={{ __html: content.body }}
        />
      </div>

      <div className="three columns action">
        <a href={ content.button.url } className="button">{content.button.label}</a>
      </div>
    </div>
  </section>
)
