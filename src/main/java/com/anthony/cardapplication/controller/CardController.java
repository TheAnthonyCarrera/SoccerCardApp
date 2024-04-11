package com.anthony.cardapplication.controller;

import com.anthony.cardapplication.model.Card;
import com.anthony.cardapplication.service.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<List<Card>> add(@RequestParam(required = false) String name) {

        if (name == null) {
            System.out.println(name);
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).build();
        }
        else {
            System.out.println(name);
            return ResponseEntity.ok(cardService.searchCard(name));
        }
    }
}