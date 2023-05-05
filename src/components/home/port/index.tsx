import {Port, TitleProjects, GridProjects, CardProject, NameProject, Card} from './styles'

import {Link} from 'react-router-dom'

import {BsFillStopwatchFill} from 'react-icons/bs'
import {IoMdWatch} from 'react-icons/io'
import {FaHashtag} from 'react-icons/fa'
import {MdCalculate, MdOutlineWeb} from 'react-icons/md'

const ContainerPort:React.FC = () => {
    return (
        <Port className="container-fluid m-0 pt-5">
            <TitleProjects id="projects">Projetos</TitleProjects>

            <GridProjects>
                <Card>
                    <Link className="linkRef" to="/portifolio/clockdigital">
                        <CardProject>
                            <IoMdWatch size="84"/>
                            <NameProject>
                                Relógio Digital
                            </NameProject>
                        </CardProject>
                    </Link>
                </Card>

                <Card>
                    <Link className="linkRef" to="/portifolio/clockanalogic">
                        <CardProject>
                            <BsFillStopwatchFill size="84"/>
                            <NameProject>
                                Relógio Analógico
                            </NameProject>
                        </CardProject>
                    </Link>
                </Card>

                <Card>
                    <Link className="linkRef" to="/portifolio/hashgame">
                        <CardProject>
                            <FaHashtag size="84"/>
                            <NameProject>
                                Jogo da Velha
                            </NameProject>
                        </CardProject>
                    </Link>
                </Card>

                <Card>
                    <Link className="linkRef" to="/portifolio/calc">
                        <CardProject >
                            <MdCalculate size="84"/>
                            <NameProject>
                                Calculadora
                            </NameProject>
                        </CardProject>
                    </Link>
                </Card>

                <Card>
                    <Link className="linkRef" to="https://musicdot.vercel.app" target="_blank">
                        <CardProject>
                            <MdOutlineWeb size="84"/>
                            <NameProject>
                                Página Clone (Music Dot)
                            </NameProject>
                        </CardProject>
                    </Link>
                </Card>

                <Card>
                    <Link className="linkRef" to="https://cotral.vercel.app" target="_blank">
                        <CardProject>
                            <MdOutlineWeb size="84"/>
                            <NameProject>
                                Projeto Pessoal - Cotral Calculadora de Caixa
                            </NameProject>
                        </CardProject>
                    </Link>
                </Card>
            </GridProjects>
        </Port>
    )
}

export default ContainerPort
    