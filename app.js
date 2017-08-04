this.state = {
    current: -1
}

const results = document.querySelector('.srg')

const highlight = (results) => {
    for (let i = 0; i < results.children.length; i++)
        if (i === this.state.current) {
            if (i === 0)
                window.scrollTo(0, 0)
            else
                window.scrollTo(0, results.children[i].offsetTop - 200)
            results.children[i].style.outline = '1px solid blue'
        }
        else
            results.children[i].style.outline = 'none'
}

window.onkeydown = e => {
    if (e.keyCode === 9 || e.keyCode === 40 || e.keyCode === 38)
        e.preventDefault()

    switch (e.which) {
        case 9:
        case 40:
            this.state.current += 1
            highlight(results)
            break
        case 38:
            this.state.current -= 1
            highlight(results)
            break
        case 13:
            results.children[
                this.state.current === -1
                    ? 0
                    : this.state.current
            ].children[0].firstChild.firstChild.firstChild.click()
            break
        default:
            break

    }
}