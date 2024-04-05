package com.anthony.cardapplication.controller;

import com.anthony.cardapplication.model.Card;
import com.anthony.cardapplication.service.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/card")
public class CardController {
    @Autowired
    private CardService cardService;

    @PostMapping("/add")
    public String add(@RequestBody Card card){
        cardService.saveCard(card);
        return "card has been added";
    }

    @GetMapping("getAll")
    public List<Card> getAllCard(){
        return cardService.getAllCard();
    }
}
