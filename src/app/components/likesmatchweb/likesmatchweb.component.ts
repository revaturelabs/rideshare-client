import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

interface UserCard {
    user: User;
    choose: string;
    face: String;
}

@Component({
    selector: 'app-likesmatchweb',
    templateUrl: './likesmatchweb.component.html',
    styleUrls: ['./likesmatchweb.component.css'],
    animations: [
        trigger('flip', [
            state('front', style({ transform: 'rotateY(0deg)' })),
            state('front-back', style({ transform: 'rotateY(90deg' })),
            state('back', style({ transform: 'rotateY(180deg)' })),
            state('back-front', style({ transform: 'rotateY(90deg' })),
            transition('* => *', animate(400))
        ])
    ]
})


export class LikesmatchwebComponent implements OnInit {

    likecards: UserCard[] = [
        {
            user: {
                id: 1,
                firstName: 'kristy',
                lastName: 'Kreme',
                email: 'email@mail.com',
                address: '123',
                office: '1',
                batchEnd: '1',
                cars: [],
                contactInfo: [],
                active: true,
                photoUrl: 'http://semantic-ui.com/images/avatar2/large/kristy.png'
            },
            choose: 'none',
            face: 'front'
        },
        {
            user: {
                id: 1,
                firstName: 'Frank',
                lastName: 'frankse',
                email: 'email@mail.com',
                address: '123',
                office: '2',
                batchEnd: '1',
                cars: [],
                contactInfo: [],
                active: true,
                photoUrl: 'http://semantic-ui.com/images/avatar2/large/matthew.png'
            },
            choose: 'none',
            face: 'front'
        },
        {
            user: {
                id: 1,
                firstName: 'kristy',
                lastName: 'Kreme',
                email: 'email@mail.com',
                address: '123',
                office: '1',
                batchEnd: '1',
                cars: [],
                contactInfo: [],
                active: true,
                photoUrl: 'http://semantic-ui.com/images/avatar2/large/kristy.png'
            },
            choose: 'none',
            face: 'front'
        },
        {
            user: {
                id: 1,
                firstName: 'Frank',
                lastName: 'frankse',
                email: 'email@mail.com',
                address: '123',
                office: '2',
                batchEnd: '1',
                cars: [],
                contactInfo: [],
                active: true,
                photoUrl: 'http://semantic-ui.com/images/avatar2/large/matthew.png'
            },
            choose: 'none',
            face: 'front'
        }

    ];

    constructor() { }

    ngOnInit() {
    }


    // Sets the card to rotate 90 degrees
    flipCard(card: UserCard) {
        if (card.face === 'front') {
            card.face = 'front-back';
        } else if (card.face === 'back') {
            card.face = 'back-front';
        }
    }

    // Card goes past 90 degrees and changes face
    endFlipCard(card: UserCard) {
        if (card.face === 'front-back') {
            card.face = 'back';
        } else if (card.face === 'back-front') {
            card.face = 'front';
        }
    }

}