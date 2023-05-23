import React from "react";
import { FlexContainer } from "../../Common";
import { Image } from "../../Atoms/Image";
import { ItemPost, ItemPostProps } from "../../Atoms/ItemPost/ItemPost";
import defaoultUser from '../../../Product/defaoultUser.png'
import styles from './CardPost.module.scss';
import { DiveLine } from "../../Atoms/DiveLine";

export type CardPostProps = {
    Date: string,
    UserName: string,
    MassageCount: string,
    UserArray?: ItemPostProps[],
}


const CardUserArray: ItemPostProps[] = [
    {
        Teme: 'По состоянию на [11.04.2023] разработка компьютерной игры продвигается стабильно. Команда разработчиков работает над несколькими ключевыми аспектами игры, включая игровую механику, графику и сюжет.',
        discription: 'Игровая механика: Команда разработчиков дорабатывает игровую механику, чтобы обеспечить плавный и увлекательный игровой процесс. Они тестировали и настраивали различные функции, такие как движение персонажа, механика боя и управление инвентарем Графика: Графика игры была в центре внимания команды разработчиков. Они работали над созданием высококачественного и захватывающего окружения для игроков, а также над созданием реалистичных и визуально привлекательных персонажей. Сюжет: Команда разработчиков работала над созданием захватывающего сюжета для игры, который будет поддерживать интерес игроков к игровому миру. Они разрабатывали персонажей, диалоги и сюжетные повороты, которые будут поддерживать увлекательность повествования игры на протяжении всего времени. В целом, разработка компьютерной игры идет успешно, и команда упорно трудится над созданием увлекательного и захватывающего игрового процесса для игроков. Команда укладывается в сроки, и мы с нетерпением ждем конечного продукта'
    },
]

const UserArray: CardPostProps[] = [
    {
        Date: '15.10.2010',
        UserName: 'Max',
        MassageCount: '20',
    },
]

export const CardPost: React.FC<CardPostProps> = ({ }) => {
    return (
        <FlexContainer flexDirection="column">
            <FlexContainer alignItems="center" height={50} className={styles.CardMassage} gap={15} justifyContent="space-between">
                <FlexContainer flexDirection="row" alignItems="center" gap={15}>
                    <a> Недавно созданные</a>
                    <a> Самые обсуждаемые</a>
                </FlexContainer >
                <div>
                    <a>Страница 1 из 8 </a>
                    <a>1 2 3 ....Последняя</a>
                </div>
            </FlexContainer>
            {
                UserArray.map(card => (
                    <FlexContainer className={styles.Items}>
                        <FlexContainer className={styles.UserCard} alignItems="center" justifyContent="center" flexDirection="column" width={260}>
                            <Image src={defaoultUser} />
                            <a href="#">
                                <h3>{card.UserName}</h3>
                            </a>
                            <div>Сообщений: {card.MassageCount}</div>
                            <div>Дата - {card.Date}</div>
                        </FlexContainer>
                        <FlexContainer className={styles.UserText} flexDirection="column" >
                            {
                                CardUserArray.map(card => (
                                    <div>
                                        <ItemPost Teme={card.Teme} discription={card.discription} />
                                    </div>
                                ))
                            }
                        </FlexContainer>
                    </FlexContainer>
                ))
            }
            <DiveLine />


        </FlexContainer>
    )
}
