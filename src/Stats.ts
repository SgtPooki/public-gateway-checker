import type { Checker } from './Checker'
import { Tag } from './Tag'
import { UiComponent } from './UiComponent'

class Stats extends UiComponent {
  gateways: HTMLDivElement
  totals: HTMLDivElement
  constructor (readonly parent: Checker) {
    super(parent)
    const statsElement = document.getElementById('checker.stats')
    if (statsElement == null) {
      throw new Error('Could not find element with Id "checker.stats"')
    }
    this.tag = Tag.fromElement(statsElement)

    this.gateways = document.createElement('div')
    this.gateways.textContent = '0/0 tested'
    this.gateways.className = 'Gateways'
    this.tag.append(this.gateways)

    this.totals = document.createElement('div')
    this.totals.textContent = '0 online'
    this.totals.className = 'Totals'
    this.tag.append(this.totals)
  }

  public update () {
    let up = 0
    let down = 0
    for (const savedNode of this.parent.nodes) {
      if (savedNode.doneChecking) {
        savedNode.status.up ? ++up : ++down
      }
    }
    this.gateways.textContent = `${up + down}/${this.parent.nodes.length} tested`
    this.totals.textContent = `${up} online`
  }
}

export { Stats }
