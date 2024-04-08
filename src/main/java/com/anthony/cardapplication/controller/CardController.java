package com.anthony.cardapplication.controller;

import com.anthony.cardapplication.model.Card;
import com.anthony.cardapplication.service.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/card")
@CrossOrigin
public class CardController {
    @Autowired
    private CardService cardService;

    @PostMapping("/add")
    public String add(@RequestBody Card card){
        cardService.saveCard(card);
        return "The card has been added";
    }

    @GetMapping("/getAll")
    public List<Card> getAllCard(){
        return cardService.getAllCard();
    }

    @GetMapping("/search")
    public List<Card> add(@RequestParam(required = false) String fName, @RequestParam(required = false) String lName) {

        if (fName == null && lName == null) {
            return cardService.getAllCard();
        }
        else {
            return cardService.searchCard(fName, lName);
        }
        //cardService.saveCard(card);
    }
}
