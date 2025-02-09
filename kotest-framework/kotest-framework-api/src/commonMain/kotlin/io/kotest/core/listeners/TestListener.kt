package io.kotest.core.listeners

import io.kotest.core.extensions.InactiveSpecListener
import io.kotest.core.test.TestCase

@Deprecated("Renamed to InactiveSpecListener. Deprecated since 5.0")
typealias SpecIgnoredListner = InactiveSpecListener

/**
 * A [TestListener] contains functions that are invoked as part of the lifecycle of a [TestCase].
 *
 * This interface is a union of the various test related listeners interfaces.
 * Users can choose to extend this interface, or the constituent interfaces separately.
 */
interface TestListener :
   BeforeTestListener,
   AfterTestListener,
   BeforeContainerListener,
   AfterContainerListener,
   BeforeEachListener,
   AfterEachListener,
   BeforeSpecListener,
   AfterSpecListener,
   BeforeInvocationListener,
   AfterInvocationListener,
   PrepareSpecListener,
   FinalizeSpecListener,
   InactiveSpecListener,
   Listener {

   override val name: String
      get() = "defaultTestListener"
}
