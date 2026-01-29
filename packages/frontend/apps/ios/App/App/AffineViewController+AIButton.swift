//
//  LoveNotesViewController+AIButton.swift
//  App
//
//  Created by 秋星桥 on 2025/1/8.
//

import Intelligents
import UIKit

extension LoveNotesViewController: IntelligentsButtonDelegate {
  func onIntelligentsButtonTapped(_: IntelligentsButton) {
    // if it shows up then we are ready to go
    let controller = IntelligentsController()
    present(controller, animated: true)
  }
}
